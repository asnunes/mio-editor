import React, { useState, useRef } from 'react';
import { useSelected, useFocused, ReactEditor, useSlate } from 'slate-react';
import { Transforms } from 'slate';
import { Resizable } from "re-resizable";

export const ImageElement = ({attributes, element, children}) => {
  const selected = useSelected();
  const focused = useFocused();
  const editor = useSlate();

  const [width, setWidth] = useState(element.width || 200);
  const [height, setHeight] = useState(element.height || 200);
  const [theta, setTheta] = useState(Math.PI / 4); // 45 degrees or aspect ratio = 1

  const imgRef = useRef(null);

  function onResizeStart(e, direction, ref, d) {
    ReactEditor.focus(editor);
    Transforms.select(editor, getElementPath());
  };

  function onResizeStop(e, direction, ref, d) {
    updateElementDimensions(d.width, d.height);
    setWidth(width + d.width);
    setHeight(height + d.height);
  };

  function updateElementDimensions(difWidth, difHeight) {
    Transforms.setNodes(
      editor,
      { width: width + difWidth, height: difHeight + height },
      { at: getElementPath() },
      );
  };

  function getElementPath() { return ReactEditor.findPath(editor, element) }
  
  function setBestImageDimensions() {
    const refWidth = element.width || imgRef.current.naturalWidth;
    const refHeight = element.height || imgRef.current.naturalHeight;
    const refTheta = Math.atan(refHeight/refWidth);

    const desirableWidth = minDiagonal * Math.cos(refTheta);
    const desirableHeight = minDiagonal * Math.sin(refTheta);
    const refDiagonal = Math.sqrt(refWidth ** 2 + refHeight ** 2);

    setWidth(_isRefDiagonalSmallerThanMinimum(refDiagonal) ? desirableWidth : refWidth);
    setHeight(_isRefDiagonalSmallerThanMinimum(refDiagonal) ? desirableHeight : refHeight);
    setTheta(refTheta);
  };
  
  return (
    <div {...attributes}>
      <div contentEditable={false} style={_getResizableStyle()}>
        <Resizable
          size={{ width, height }}
          onResizeStart={onResizeStart}
          onResizeStop={onResizeStop}
          lockAspectRatio={true}
          minWidth={minDiagonal * Math.cos(theta)}
          minHeight={minDiagonal * Math.sin(theta)}
          maxWidth={maxDiagonal * Math.cos(theta)}
          maxHeight={maxDiagonal * Math.sin(theta)}
        >
          <img
            ref={imgRef}
            src={element.base64}
            alt="mio editor custom"
            style={_getImgStyle(selected, focused)}
            onLoad={setBestImageDimensions}
          />
        </Resizable>
      </div>
      {children}
    </div>
  );
};

const minDiagonal = 100;
const maxDiagonal = 700;

const _isRefDiagonalSmallerThanMinimum = refDiagonal => refDiagonal < minDiagonal;

const _getResizableStyle = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const _getImgStyle = (selected, focused) => ({
  display: 'block',
  width: '100%',
  height: '100%',
   
  boxShadow: `${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'}`
});
  

import React, { useState, useEffect, useRef } from 'react';
import { useSelected, useFocused, ReactEditor, useSlate } from 'slate-react';
import { Transforms } from 'slate';
import { ResizableBox } from 'react-resizable';

import './style.css';

export const ImageElement = ({attributes, element, children}) => {
  const selected = useSelected();
  const focused = useFocused();
  const editor = useSlate();

  const [width, setWidth] = useState(element.width || 200);
  const [height, setHeight] = useState(element.height || 200);
  const [theta, setTheta] = useState(Math.PI / 4); // 45 degrees or aspect ratio = 1
  
  const imgRef = useRef(null);
  
  const minimumWidth = 30 * Math.cos(theta);
  const minimumHeight = 30 * Math.sin(theta);

  const maximumWidth = 500 * Math.cos(theta);
  const maximumHeight = 500 * Math.sin(theta);

  useEffect(setBestImageDimensions, []);

  const onResizeStop = (e, data) => {
    const path = ReactEditor.findPath(editor, element);
    updateElementDimensions(path, data.size);
  };

  const updateElementDimensions = (path, size) => {
    Transforms.setNodes(
      editor,
      { width: size.width, height: size.height },
      { at: path },
      )
  };
  
  const setBestImageDimensions = () => {
    const naturalWidth = imgRef.current.naturalWidth;
    const naturalHeight = imgRef.current.naturalHeight;
    const naturalTheta = Math.atan(naturalHeight/naturalWidth);

    const desirableWidth = 355 * Math.cos(naturalTheta);
    const desirableHeight = 355 * Math.sin(naturalTheta);

    setWidth(Math.min(naturalWidth, desirableWidth));
    setHeight(Math.min(naturalHeight, desirableHeight));
    setTheta(naturalTheta);
  };
  
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <ResizableBox
          className="box"
          width={width}
          height={height}
          onResizeStop={onResizeStop}
          lockAspectRatio={true}
          minConstraints={[minimumWidth, minimumHeight]}
          maxConstraints={[maximumWidth, maximumHeight]}
        >
          <img
            ref={imgRef}
            src={element.base64}
            style={_getImgStyle(selected, focused)}
          />
        </ResizableBox>
      </div>
      {children}
    </div>
  );
};

const _getImgStyle = (selected, focused) => ({
  display: 'block',
  width: '100%',
  height: '100%',
   
  boxShadow: `${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'}`
});
  

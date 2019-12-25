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

  const imgRef = useRef(null);

  useEffect(() => {
    setWidth(imgRef.current.width);
    setHeight(imgRef.current.height);
  }, []);

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
  
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <ResizableBox
          width={width}
          height={height}
          onResizeStop={onResizeStop}
          lockAspectRatio={true}
          minConstraints={[50, 50]}
          maxConstraints={[600, 400]}
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
  

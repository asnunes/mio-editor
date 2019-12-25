import React, { useState, useEffect, useRef } from 'react';
import { useSelected, useFocused } from 'slate-react';
import { ResizableBox } from 'react-resizable';

import './style.css';

export const ImageElement = ({attributes, element, children}) => {
  const selected = useSelected();
  const focused = useFocused();

  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const imgRef = useRef(null);

  useEffect(() => {
    setWidth(imgRef.current.width);
    setHeight(imgRef.current.height);
  }, []);
  
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <ResizableBox
          width={width}
          height={height}
          minConstraints={[50, 50]}
          maxConstraints={[600, 400]}
          lockAspectRatio={true}
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
  

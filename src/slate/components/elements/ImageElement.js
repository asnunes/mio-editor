import React from 'react';
import { useSelected, useFocused } from 'slate-react';

export const ImageElement = ({attributes, element, children}) => {
  const selected = useSelected();
  const focused = useFocused();
  
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <img
          src={element.base64}
          style={getImgStyle(selected, focused)}
        />
      </div>
      {children}
    </div>
  );
};

const getImgStyle = (selected, focused) => ({
  display: 'block',
  maxWidth: '100%',
  maxHeight: '20em',
  boxShadow: `${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'}`
});
  

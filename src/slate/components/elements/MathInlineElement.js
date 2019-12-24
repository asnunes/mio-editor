import React from 'react';
import { useSelected, useFocused } from 'slate-react';
import MathJax from 'react-mathjax2';

export const MathInlineElement = ({attributes, element, children}) => {
  const selected = useSelected();
  const focused = useFocused();

  console.log(element.content);

  return (
    <span
      {...attributes}
      style={_getStyle(selected, focused)}
      contentEditable={false}
    >
      <MathJax.Node inline>{element.content}</MathJax.Node>
      {children}
    </span>
  );
};

const _getStyle = (selected, focused) => ({
  boxShadow: `${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'}`
});
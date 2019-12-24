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
      <MathJax.Context
        script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_SVG"
        options={MATH_JAX_OPTIONS}
      >
        <MathJax.Node inline>{element.content}</MathJax.Node>
      </MathJax.Context>
      {children}
    </span>
  );
};

const MATH_JAX_OPTIONS = {
  jax: ['input/ascii', 'output/SVG'],
  showMathMenu: false,
};

const _getStyle = (selected, focused) => ({
  boxShadow: `${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'}`
});
import React, { useState, useEffect } from 'react';
import MathJax from 'react-mathjax2';

export const MathElement = ({attributes, element, children}) => {
  const [mathString, setMathString] = useState("");

  useEffect(() => setMathString(element.children[0].text || ""));

  return (
    <div>
      <div style={mathViewStyle} contentEditable={false}>
        <MathView mathString={mathString}/>
      </div>
      <div style={mathEditorStyle} {...attributes}>
        {children}
      </div>
    </div>
  );
};

const MathView = ({mathString}) => {
  const content = mathString === '' ? 'color(grey)(text(Type an equation below))' : mathString;

  return (
    <MathJax.Context 
      script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_SVG"
      options={MATH_JAX_OPTIONS}
    >
      <div>
        <MathJax.Node>{content}</MathJax.Node>
      </div>
    </MathJax.Context>
  );
};

const MATH_JAX_OPTIONS = {
  jax: ['input/ascii', 'output/SVG'],
  showMathMenu: false,
};

const mathViewStyle = {
  boxShadow: '0 0 0 3px #B4D5FF',
  inlineSize: 'fit-content',
  margin: 'auto',
};

const mathEditorStyle = {
  background: 'rgba(180, 213, 255, 0.5)',
  fontSize: '0.8em',
  padding: '3px',
  display: 'flex',
  inlineSize: 'fit-content',
  margin: 'auto',
  minWidth: '20px',
};

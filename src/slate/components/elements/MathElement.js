import React, { useState, useEffect } from 'react';
import { useSelected, useFocused } from 'slate-react';
import MathJax from 'react-mathjax2';

export const MathElement = ({attributes, element, children}) => {
  const [mathString, setMathString] = useState("");

  const selected = useSelected();
  const focused = useFocused();

  useEffect(() => setMathString(element.children[0].text || ""));

  return (
    <div {...attributes} style={{position: 'relative'}}>
      <div style={getMathViewStyle(selected, focused)} contentEditable={false}>
        <MathView mathString={mathString}/>
      </div>
      <div style={getMathEditorStyle(selected, focused)}>
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

const getMathViewStyle = (selected, focused) => {
  const defaultStyle = {
    inlineSize: 'fit-content',
    margin: 'auto',
    padding: '5px',
    borderRadius: '10px',
  };
  
  if (!selected || !focused) return defaultStyle;
  return {
    boxShadow: '0 0 0 2px #80deea',
    ...defaultStyle
  };
};

const getMathEditorStyle = (selected, focused) => {
  const defaultStyle = {
    position: 'absolute',
    left: '50%',
    bottom: 0,
    transform: 'translate(-50%, 120%)',
    borderRadius: '10px',
  };


  if (!selected || !focused) return { 
    opacity: 0,
    ...defaultStyle, 
  };

  return {
    background: '#80deea',
    fontSize: '0.8em',
    padding: '3px',
    minWidth: '20px',
    ...defaultStyle
  };  
};
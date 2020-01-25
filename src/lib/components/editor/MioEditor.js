import React, { useMemo, useState, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import MathJax from 'react-mathjax2';

import { Toolbar } from '../ui';
import { renderLeaf, renderElement } from '../../renders';
import { MioHelpers } from '../../helpers';
import { withAllPlugins } from '../../plugins';

export const MioEditor = (props) => {
  const editor = useMemo(() => withAllPlugins(withHistory(withReact(createEditor()))), []);
  const [value, setValue] = useState(props.value);

  const onValueChange = value => {
    setValue(value);
    if (props.onValueChange) props.onValueChange(value);
  }
  
  return (
    <Slate editor={editor} value={value} onChange={onValueChange}>
      <Toolbar/>
      <div style={style}>
      <MathJax.Context 
        script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_SVG"
        options={MATH_JAX_OPTIONS}
      >
        <Editable 
          renderLeaf={useCallback(renderLeaf)}
          renderElement={useCallback(renderElement)}
          onKeyDown={event => MioHelpers.onKeyDown(event, editor)}
          autoFocus
          spellCheck
        />
      </MathJax.Context>
      </div>
    </Slate>
  );
};

const MATH_JAX_OPTIONS = {
  jax: ['input/ascii', 'input/tex', 'output/SVG'],
  SVG: {
    linebreaks: {
      automatic: true,
      width: 'container',
    },
  },
  showMathMenu: false,
};

const style = {
  width: '21cm',
  minHeight: '29.7cm',
  margin: '30mm auto 27mm auto',
  boxShadow: '0px 2px 5px #888888',
  borderRadius: '3px',
  border: '15px 0 auto 0',
  fontSize: '14pt',
  padding: '3cm 2cm 2cm 3cm',  
};


import React, { useMemo, useState, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import MathJax from 'react-mathjax2';

import { Toolbar } from '../ui';
import { renderLeaf, renderElement } from '../../renders';
import { MioHelpers } from '../../helpers';
import { withAllPlugins } from '../../plugins';

import './stylesheets/reset.css';
import './stylesheets/style.css';

export const MioEditor = (props) => {
  const editor = useMemo(() => withAllPlugins(withHistory(withReact(createEditor()))), []);
  const [value, setValue] = useState(props.value || initialValue);

  const onValueChange = value => {
    setValue(value);
    if (props.onValueChange) props.onValueChange(value);
  }
  
  return (
    <Slate editor={editor} value={value} onChange={onValueChange}>
      <Toolbar/>
      <div className="mio-editor">
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
  jax: ['input/ascii', 'output/SVG'],
  SVG: {
    linebreaks: {
      automatic: true,
      width: 'container',
    },
  },
  showMathMenu: false,
};

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of a paragraph...'}],
  },
];


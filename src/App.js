import React, { useMemo, useState, useCallback, useRef } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import MathJax from 'react-mathjax2';

import { Toolbar } from './ui/components/';
import { renderLeaf, renderElement } from './slate/renders';
import { MioHelpers } from './slate/helpers';
import { withInline, withImage, withInlineMath } from './slate/plugins';

import { ImageUploader } from './services';

import './stylesheets/App.scss';

const App = () => {
  const editor = useMemo(() => withInlineMath(withImage(withInline(withHistory(withReact(createEditor()))))), []);
  const imageInput = useRef(null);
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('content')) || initialValue);

  const onValueChange = value => {
    setValue(value);
    saveInLocalStorage(value);
  }

  const saveInLocalStorage = value => {
    const content = JSON.stringify(value);
    localStorage.setItem('content', content);
    console.log(content);
  }

  const uploadImage = event => {
    if (event.target.files.length === 0) return; 
    
    const file = event.target.files[0];
    ImageUploader.getBase64FromFile(file).then(
      base64 => MioHelpers.insertImage(editor, base64),
      error => console.log(error)
    );
  };
  
  return (
    <Slate editor={editor} value={value} onChange={onValueChange}>
      <Toolbar/>
      <input
        id="file-upload"
        type="file"
        accept="image/png, image/jpeg"
        ref={imageInput}
        onChange={uploadImage}
      />
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

export default App;


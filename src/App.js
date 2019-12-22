import React, { useMemo, useState, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';

import { renderLeaf, renderElement } from './slate/renders';
import { MioHelpers } from './slate/helpers';
import { withInline } from './slate/plugins';

import './App.css';

const App = () => {
  const editor = useMemo(() => withInline(withHistory(withReact(createEditor()))), []);
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
  
  return (
    <Slate editor={editor} value={value} onChange={onValueChange}>
      <Editable 
        renderLeaf={useCallback(renderLeaf)}
        renderElement={useCallback(renderElement)}
        onKeyDown={event => MioHelpers.onKeyDown(event, editor)}
        autoFocus
        spellCheck
      />
    </Slate>
  );
};

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of a paragraph...'}],
  },
]

export default App;


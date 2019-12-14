import React, { useMemo, useState, useCallback } from 'react';
import { createEditor, Editor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import Leaf from './components/slate/Leaf';

import './App.css';

const App = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
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

  const renderLeaf = useCallback(props => <Leaf {...props}/>, []);
  
  return (
    <Slate editor={editor} value={value} onChange={onValueChange}>
      <Editable 
        renderLeaf={renderLeaf}
        onKeyDown={event => {
          if (!event.ctrlKey) return;

          switch (event.key) {
            case 'b':
              event.preventDefault();
              Editor.setNodes(
                editor,
                { bold: true },
                { match: 'text', split: true },
              );
              break;
            case 's':
              event.preventDefault();
              Editor.setNodes(
                editor,
                { strikethrough: true },
                { match: 'text', split: true },
              );
              break;
            case 'i':
              event.preventDefault();
              Editor.setNodes(
                editor,
                { italic: true },
                { match: 'text', split: true },
              );
              break;
            case 'u':
              event.preventDefault();
              Editor.setNodes(
                editor,
                { underline: true },
                { match: 'text', split: true }
              )
          };
        }}
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


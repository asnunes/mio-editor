import React, { useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import './App.css';

const App = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of a paragraph...'}],
    },
  ]);
  
  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable/>
    </Slate>
  );
};

export default App;


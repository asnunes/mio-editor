import React, { useState } from 'react';
import { MioEditor } from '../lib';

const App = () => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('content')) || initialValue);

  const onValueChange = value => {
    setValue(value);
    saveInLocalStorage(value);
  };

  const saveInLocalStorage = value => {
    const content = JSON.stringify(value);
    localStorage.setItem('content', content);
    console.log(content);
  }

  return (
    <MioEditor
      value={value}
      onValueChange={onValueChange}
    />
  );
};

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of a paragraph...'}],
  },
];

export default App;


import React, { useState } from 'react';
import { MioEditor } from '../lib';

const App = () => {
  const [value, setValue] = useState(initialValue);

  const onValueChange = value => {
    setValue(value);
    console.log(JSON.stringify(value));
  };

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


import React from 'react';

export const CodeElement = ({ attributes, children }) => (
  <pre>
    <code style={getCodeDecoration()} {...attributes}>{children}</code>
  </pre>
);

const getCodeDecoration = () => ({
  fontFamily: 'monospace',
  backgroundColor: '#eee',
  padding: '3px',
});
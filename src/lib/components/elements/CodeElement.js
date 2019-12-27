import React from 'react';

export const CodeElement = ({ attributes, children }) => (
  <pre style={getPreDecoration()}>
    <code {...attributes}>{children}</code>
  </pre>
);

const getPreDecoration = () => ({
  backgroundColor: '#f4f4f4',
  border: '1px solid #ddd',
  borderLeft:  '3px solid black',
  color: '#666',
  pageBreakInside: 'avoid',
  padding: '0 1em',
  marginBottom: '1.6em',
  borderRadius: '5px',
  fontFamily: 'Courier New Courier monospace',
  overflow: 'auto',
  wordWrap: 'break-word',
});
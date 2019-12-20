import React from 'react';

export const CodeElement = props => (
  <pre {...props.attributes}>
    <code>{props.children}</code>
  </pre>
);

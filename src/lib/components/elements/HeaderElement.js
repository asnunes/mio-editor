import React from 'react';

export const HeaderElement = ({ attributes, children }) => (
  <h2 {...attributes}>
    {children}
  </h2>
);
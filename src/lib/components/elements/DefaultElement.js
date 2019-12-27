import React from 'react';

export const DefaultElement = props => (
  <p {...props.attributes}>{props.children}</p>
);


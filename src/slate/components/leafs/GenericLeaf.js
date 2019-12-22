import React from 'react';

export const GenericLeaf = props => (
  <span
    {...props.attributes}
    style={getLeafStyle(props.leaf)}
  >
    {props.children}
  </span>
);

const getLeafStyle = leaf => ({
  fontWeight: leaf.bold ? 'bold' : 'normal',
  fontStyle: leaf.italic ? 'italic' : 'normal',
  fontFamily: leaf.code ? 'monospace' : 'normal',
  textDecoration: getTextDecoration(leaf),
  ...getCodeDecoration(leaf)
});

const getTextDecoration = leaf => {
  const decorations = [];
  if (leaf.underline) decorations.push('underline');
  if (leaf.strikethrough) decorations.push('line-through');
  return decorations.length === 0 ? 'none' : decorations.join(' '); 
};

const getCodeDecoration = leaf => {
  return leaf.code ? {
    fontFamily: leaf.code ? 'monospace' : 'normal',
    backgroundColor: '#eee',
    padding: '3px',
  } : {}
}

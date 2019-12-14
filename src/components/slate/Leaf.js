import React from 'react';

const Leaf = props => (
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
  textDecoration: getTextDecoration(leaf),
});

const getTextDecoration = leaf => {
  const decorations = [];
  if (leaf.underline) decorations.push('underline');
  if (leaf.strikethrough) decorations.push('line-through');
  return decorations.length === 0 ? 'normal' : decorations.join(' '); 
};

export default Leaf;
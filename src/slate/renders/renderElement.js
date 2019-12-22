import React from 'react';
import { CodeElement, DefaultElement, HeaderElement, ImageElement, MathElement } from '../components/elements';

export const renderElement = props => {
  switch(props.element.type) {
    case 'header':
      return <HeaderElement {...props}/>;
    case 'code':
      return <CodeElement {...props}/>;
    case 'image':
      return <ImageElement {...props}/>;
    case 'math':
      return <MathElement {...props}/>;
    default:
      return <DefaultElement {...props}/>;
  }
};


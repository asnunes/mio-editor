import React from 'react';
import { CodeElement, DefaultElement, HeaderElement, ImageElement } from '../components/elements';

export const renderElement = props => {
  switch(props.element.type) {
    case 'header':
      return <HeaderElement {...props}/>;
    case 'code':
      return <CodeElement {...props}/>;
    case 'image':
      return <ImageElement {...props}/>;
    default:
      return <DefaultElement {...props}/>;
  }
};


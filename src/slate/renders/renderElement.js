import React from 'react';
import { CodeElement, DefaultElement } from '../components/elements';

export const renderElement = props => {
  switch(props.element.type) {
    case 'code':
      return <CodeElement {...props}/>;
    default:
      return <DefaultElement {...props}/>;
  }
};


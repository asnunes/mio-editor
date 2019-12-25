import React from 'react';
import { ToggleBlockButton } from '..';

import { ReactComponent as ParagraphSVG } from './icons/paragraph-icon.svg';

export const Toolbar = props => {
  return (
    <ToggleBlockButton
      format="paragraph"
      SVG={ParagraphSVG}
    />
  );
};

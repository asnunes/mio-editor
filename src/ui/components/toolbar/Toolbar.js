import React from 'react';
import { ToggleButton, ButtonsGroup } from '..';

import { ReactComponent as TitleSVG } from './icons/title-icon.svg';

export const Toolbar = props => {
  return (
    <ButtonsGroup>
      <ToggleButton
        type="block"
        format="header"
        SVG={TitleSVG}
      />
    </ButtonsGroup>
  );
};

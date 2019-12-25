import React from 'react';
import { ToggleButton, ButtonsGroup } from '..';
import { TitleSVG, BoldSVG, ItalicSVG, UnderlineSVG, StrikeThroughSVG } from './icons';

export const Toolbar = props => {
  return (
    <div style={_getStyle()}>
      <ButtonsGroup>
        <ToggleButton
          type="block"
          format="header"
          SVG={TitleSVG}
        />
      </ButtonsGroup>
      <ButtonsGroup>
        <ToggleButton
          type="mark"
          format="bold"
          SVG={BoldSVG}
        />
        <ToggleButton
          type="mark"
          format="bold"
          SVG={ItalicSVG}
        />
        <ToggleButton
          type="mark"
          format="bold"
          SVG={UnderlineSVG}
        />
        <ToggleButton
          type="mark"
          format="bold"
          SVG={StrikeThroughSVG}
        />
      </ButtonsGroup>
    </div> 
  );
};

const _getStyle = () => ({
  display: 'flex',
});

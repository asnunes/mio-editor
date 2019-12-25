import React from 'react';
import { ToggleButton, ButtonsGroup } from '..';
import { TitleSVG, BoldSVG, ItalicSVG, UnderlineSVG, StrikeThroughSVG, CodeSVG } from './icons';

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
          format="italic"
          SVG={ItalicSVG}
        />
        <ToggleButton
          type="mark"
          format="underline"
          SVG={UnderlineSVG}
        />
        <ToggleButton
          type="mark"
          format="strikethrough"
          SVG={StrikeThroughSVG}
        />
        <ToggleButton
          type="mark"
          format="code"
          SVG={CodeSVG}
        />
      </ButtonsGroup>
    </div> 
  );
};

const _getStyle = () => ({
  display: 'flex',
});

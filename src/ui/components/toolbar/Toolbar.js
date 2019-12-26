import React from 'react';
import { ToggleButton, ButtonsGroup } from '..';
import { TitleSVG, BoldSVG, ItalicSVG, UnderlineSVG,
  StrikeThroughSVG, CodeSVG, ImageSVG, MathSVG } from './icons';
import { GenericButton } from '../GenericButton';

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
      <ButtonsGroup>
        <GenericButton
          SVG={ImageSVG}
        />
        <ToggleButton
          type="block"
          format="math"
          SVG={MathSVG}
        />
      </ButtonsGroup>
    </div> 
  );
};

const _getStyle = () => ({
  display: 'flex',
  padding: '5px 0',
  borderBottom: '1px solid rgb(218, 220, 224)',
  zIndex: 110,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  background: 'white'
});

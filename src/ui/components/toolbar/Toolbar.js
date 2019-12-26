import React from 'react';
import { ButtonsGroup } from '../buttons-group';
import { GenericToggleButton, ImageButton, CodeButton } from '../buttons';
import { TitleSVG, BoldSVG, ItalicSVG, UnderlineSVG,
  StrikeThroughSVG, CodeSVG, MathSVG } from './icons';

export const Toolbar = props => {
  return (
    <div style={_getStyle()}>
      <ButtonsGroup>
        <GenericToggleButton
          type="block"
          format="header"
          SVG={TitleSVG}
        />
      </ButtonsGroup>
      <ButtonsGroup>
        <GenericToggleButton
          type="mark"
          format="bold"
          SVG={BoldSVG}
        />
        <GenericToggleButton
          type="mark"
          format="italic"
          SVG={ItalicSVG}
        />
        <GenericToggleButton
          type="mark"
          format="underline"
          SVG={UnderlineSVG}
        />
        <GenericToggleButton
          type="mark"
          format="strikethrough"
          SVG={StrikeThroughSVG}
        />
        <CodeButton/>
      </ButtonsGroup>
      <ButtonsGroup>
        <ImageButton/>
        <GenericToggleButton
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

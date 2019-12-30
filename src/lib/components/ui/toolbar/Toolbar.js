import React from 'react';
import { ButtonsGroup } from '../buttons-group';
import { GenericToggleButton, ImageButton, CodeButton } from '../buttons';
import titleSVG from "./icons/title-icon.svg";
import boldSVG from "./icons/bold-icon.svg";
import italicSVG from "./icons/italic-icon.svg";
import underlineSVG from "./icons/underline-icon.svg";
import strikeThroughSVG from "./icons/strike-through-icon.svg";
import mathSVG from "./icons/math-icon.svg";

export const Toolbar = props => {
  return (
    <div style={_getStyle()}>
      <ButtonsGroup>
        <GenericToggleButton
          type="block"
          format="header"
          svg={titleSVG}
        />
      </ButtonsGroup>
      <ButtonsGroup>
        <GenericToggleButton
          type="mark"
          format="bold"
          svg={boldSVG}
        />
        <GenericToggleButton
          type="mark"
          format="italic"
          svg={italicSVG}
        />
        <GenericToggleButton
          type="mark"
          format="underline"
          svg={underlineSVG}
        />
        <GenericToggleButton
          type="mark"
          format="strikethrough"
          svg={strikeThroughSVG}
        />
        <CodeButton/>
      </ButtonsGroup>
      <ButtonsGroup>
        <ImageButton/>
        <GenericToggleButton
          type="block"
          format="math"
          svg={mathSVG}
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

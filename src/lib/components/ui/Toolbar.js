import React from 'react';
import { ButtonsGroup } from './';
import { GenericToggleButton, ImageButton, CodeButton } from './buttons';
import { faHeading, faBold, faItalic, faUnderline, 
  faStrikethrough, faSquareRootAlt } from '@fortawesome/free-solid-svg-icons';

export const Toolbar = () => {
  return (
    <div style={_getStyle()}>
      <ButtonsGroup>
        <GenericToggleButton
          type="block"
          format="header"
          icon={faHeading}
        />
      </ButtonsGroup>
      <ButtonsGroup>
        <GenericToggleButton
          type="mark"
          format="bold"
          icon={faBold}
        />
        <GenericToggleButton
          type="mark"
          format="italic"
          icon={faItalic}
        />
        <GenericToggleButton
          type="mark"
          format="underline"
          icon={faUnderline}
        />
        <GenericToggleButton
          type="mark"
          format="strikethrough"
          icon={faStrikethrough}
        />
        <CodeButton/>
      </ButtonsGroup>
      <ButtonsGroup>
        <ImageButton/>
        <GenericToggleButton
          type="block"
          format="math"
          icon={faSquareRootAlt}
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

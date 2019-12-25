import React from 'react';
import { useSlate } from 'slate-react';

import { MioHelpers } from '../../slate/helpers';

export const ToggleBlockButton = ({ format, SVG }) => {
  const editor = useSlate();
  
  return (
    <div
      type="button"
      style={_getButtonStyle()}
    >
      <SVG style={_getIconStyle(editor, format)}/>
    </div>
  );
};

const _getButtonStyle = () => ({
  cursor: 'pointer',
  padding: '0 10px',
});

const _getIconStyle = (editor, format) => ({
  ..._getStatusStyle(editor),
  width: '20px',
  height: '20px',
});

const _getStatusStyle = (editor, format) => {
  const isActive = MioHelpers.isBlockActive(editor, format);
  return isActive ? {
    color: 'rgba(81, 203, 238, 0.8)',
    filter: 'drop-shadow(0 3px 3px rgba(81, 203, 238, 0.4))',
  } : {};
};
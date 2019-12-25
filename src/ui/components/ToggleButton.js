import React from 'react';
import { useSlate } from 'slate-react';

import { MioHelpers } from '../../slate/helpers';

export const ToggleButton = ({ type, format, SVG }) => {
  const editor = useSlate();
  
  return (
    <div
      style={_getButtonStyle()}
    >
      <SVG style={_getIconStyle(editor, type, format)}/>
    </div>
  );
};

const _getButtonStyle = () => ({
  cursor: 'pointer',
  padding: '0 10px',
});

const _getIconStyle = (editor, type, format) => ({
  ..._getStatusStyle(editor, type, format),
  width: '20px',
  height: '20px',
});

const _getStatusStyle = (editor, type, format) => {
  return _isActive(editor, type, format) ? {
    color: 'rgba(81, 203, 238, 0.8)',
    filter: 'drop-shadow(0 3px 3px rgba(81, 203, 238, 0.4))',
  } : {};
};

const _isActive = (editor, type, format) => {
  if (type === 'block') return MioHelpers.isBlockActive(editor, format);
  return MioHelpers.isMarkActive(editor, format);
}
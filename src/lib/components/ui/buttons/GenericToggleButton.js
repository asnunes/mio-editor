import React from 'react';
import { ReactEditor, useSlate } from 'slate-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MioHelpers } from '../../../helpers';

export const GenericToggleButton = ({ type, format, icon }) => {
  const editor = useSlate();
  const isButtonEnabled = MioHelpers.isBlockActive(editor, 'paragraph');
  const isButtonToggled = _isButtonToggled(editor, type, format);
  
  function onButtonMouseDown(e) {
    e.preventDefault();
    _toggleBlockOrMark(editor, type, format);
    ReactEditor.focus(editor);
  }

  return (
    <div
      onMouseDown={e => _isActive(isButtonEnabled, isButtonToggled) ? onButtonMouseDown(e) : null}
      style={_getButtonStyle(isButtonEnabled, isButtonToggled)}
    >
      <FontAwesomeIcon icon={icon} style={_getIconStyle(isButtonEnabled, isButtonToggled)}/>
    </div>
  );
};

const _getButtonStyle = (isButtonEnabled, isButtonToggled) => ({
  cursor: _isActive(isButtonEnabled, isButtonToggled) ? 'pointer' : 'arrow',
  padding: '0 10px',
});

const _getIconStyle = (isButtonEnabled, isButtonToggled) => ({
  ..._getStatusStyle(isButtonEnabled, isButtonToggled),
  width: '20px',
  height: '20px',
});

const _getStatusStyle = (isButtonEnabled, isButtonToggled) => {
  if (isButtonToggled) return { 
    color: 'rgba(81, 203, 238, 0.8)',
    filter: 'drop-shadow(0 3px 3px rgba(81, 203, 238, 0.4))',
  };
  if (!isButtonEnabled) return { opacity: '0.5' };
  return {};
};

const _isActive = (isButtonEnabled, isButtonToggled) => isButtonEnabled || isButtonToggled;

const _isButtonToggled = (editor, type, format) => {
  return _checkTypeAndReturnFunction(
    type,
    MioHelpers.isBlockActive,
    MioHelpers.isMarkActive
  )(editor, format);
}

const _toggleBlockOrMark = (editor, type, format) => {
  return _checkTypeAndReturnFunction(
    type,
    MioHelpers.toggleBlock,
    MioHelpers.toggleMark
  )(editor, format);
};

const _checkTypeAndReturnFunction = (type, functionForBlock, functionForMark) => {
  return type === 'block' ? functionForBlock : functionForMark;
}
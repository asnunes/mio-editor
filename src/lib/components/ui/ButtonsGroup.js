import React from 'react';

export const ButtonsGroup = ({ children }) => {
  return (
    <div style={_getStyle()}>
      {children}
    </div>
  );
};

const _getStyle = () => ({
  display: 'flex',
  borderRight: '1px solid rgb(218, 220, 224)',
  margin: '10px 0',
});

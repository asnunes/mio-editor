import React from 'react';

import './style.css';

export const ButtonsGroup = ({ children }) => {
  return (
    <div className="buttons-group">
      {children}
    </div>
  );
};
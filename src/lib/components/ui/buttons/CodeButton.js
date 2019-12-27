import React, { useState, useEffect } from 'react';
import { useSlate } from 'slate-react';

import { GenericToggleButton } from '.';
import { MioHelpers } from '../../../helpers';

import { CodeSVG } from '../toolbar/icons';

export const CodeButton = () => {
  const editor = useSlate();
  const [isBlock, setIsBlock] = useState(false);

  useEffect(() => {
    setIsBlock(MioHelpers.isLineEmpty(editor))
  });

  return (
    <GenericToggleButton
      type={isBlock ? "block" : "mark"}
      format="code"
      SVG={CodeSVG}
    />
  );
};
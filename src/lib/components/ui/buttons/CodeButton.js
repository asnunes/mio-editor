import React from 'react';
import { useSlate } from 'slate-react';

import { GenericToggleButton } from '.';
import { MioHelpers } from '../../../helpers';

import codeSVG from '../toolbar/icons/code-icon.svg';

export const CodeButton = () => {
  const editor = useSlate();
  const isBlock = MioHelpers.isLineEmpty(editor);

  return (
    <GenericToggleButton
      type={isBlock ? "block" : "mark"}
      format="code"
      svg={codeSVG}
    />
  );
};
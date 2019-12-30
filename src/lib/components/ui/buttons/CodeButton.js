import React from 'react';
import { useSlate } from 'slate-react';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import { GenericToggleButton } from '.';
import { MioHelpers } from '../../../helpers';

export const CodeButton = () => {
  const editor = useSlate();
  const isBlock = MioHelpers.isLineEmpty(editor);

  return (
    <GenericToggleButton
      type={isBlock ? "block" : "mark"}
      format="code"
      icon={faCode}
    />
  );
};
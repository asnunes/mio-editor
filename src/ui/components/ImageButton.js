import React, { useEffect, useRef, useState } from 'react';
import { useSlate } from 'slate-react';

import { ImageUploader } from '../../services';
import { ImageSVG } from './toolbar/icons';
import { MioHelpers } from '../../slate/helpers';

export const ImageButton = () => {
  const editor = useSlate();
  const imageInput = useRef(null);

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  useEffect(() => setIsButtonEnabled(MioHelpers.isBlockActive(editor, 'paragraph')));
  
  function uploadImage(event) {
    if (event.target.files.length === 0) return; 
    
    const file = event.target.files[0];
    ImageUploader.getBase64FromFile(file).then(
      base64 => MioHelpers.insertImage(editor, base64),
      error => console.log(error)
    );
  };

  function onImageButtonMouseDown(event) {
    if (!isButtonEnabled) return;

    event.preventDefault();
    imageInput.current.value = null;
    imageInput.current.click(event);
  }

  return (
    <div
      onMouseDown={onImageButtonMouseDown}
      style={_getButtonStyle(isButtonEnabled)}
    >
      <ImageSVG style={_getIconStyle(isButtonEnabled)}/>
      <input
          id="file-upload"
          type="file"
          accept="image/png, image/jpeg"
          ref={imageInput}
          onChange={uploadImage}
          style={{display: 'none'}}
      />
    </div>
  );
};

const _getButtonStyle = isButtonEnabled => ({
  cursor: isButtonEnabled ? 'pointer' : 'arrow',
  padding: '0 10px',
});

const _getIconStyle = isButtonEnabled => ({
  opacity: isButtonEnabled ? '1' : '0.5',
  width: '20px',
  height: '20px',
});

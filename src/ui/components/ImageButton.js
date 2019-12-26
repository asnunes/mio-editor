import React, { useEffect, useRef, useState } from 'react';
import { useSlate } from 'slate-react';

import { ImageUploader } from '../../services';
import { ImageSVG } from './toolbar/icons';
import { MioHelpers } from '../../slate/helpers';

export const ImageButton = () => {
  const editor = useSlate();
  const imageInput = useRef(null);

  const [isButtonActive, setIsButtonActive] = useState(false);
  useEffect(() => setIsButtonActive(MioHelpers.isBlockActive(editor, 'paragraph')));
  
  function uploadImage(event) {
    if (event.target.files.length === 0) return; 
    
    const file = event.target.files[0];
    ImageUploader.getBase64FromFile(file).then(
      base64 => MioHelpers.insertImage(editor, base64),
      error => console.log(error)
    );
  };

  function onImageButtonMouseDown(event) {
    if (!isButtonActive) return;

    event.preventDefault();
    imageInput.current.value = null;
    imageInput.current.click(event);
  }

  return (
    <div
      onMouseDown={onImageButtonMouseDown}
      style={_getButtonStyle(isButtonActive)}
    >
      <ImageSVG style={_getIconStyle(isButtonActive)}/>
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

const _getButtonStyle = isButtonActive => ({
  cursor: isButtonActive ? 'pointer' : 'arrow',
  padding: '0 10px',
});

const _getIconStyle = isButtonActive => ({
  opacity: isButtonActive ? '1' : '0.5',
  width: '20px',
  height: '20px',
});

export const withImage = editor => {
  const { isVoid } = editor;

  editor.isVoid = element => {
    return element.type === 'image' || element.type === 'mathInline'? true : isVoid(element);
  };

  return editor;
};
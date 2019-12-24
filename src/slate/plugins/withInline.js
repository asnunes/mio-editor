export const withInline = editor => {
  const { isInline } = editor;

  editor.isInline = element => {
    return ["code", "mathInline"].includes(element.type) ? true : isInline(element);
  }

  return editor;
};
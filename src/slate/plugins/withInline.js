export const withInline = editor => {
  editor.isInline = element => {
    return ["code"].includes(element.type);
  }

  return editor;
};
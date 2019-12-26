import { Editor, Transforms } from "slate";

export const withCode = editor => {
  const { insertBreak } = editor;

  editor.insertBreak = () => {
    const [code] = Editor.nodes(editor, { match: n => n.type === 'code'});
    if (code) {
      Transforms.insertText(editor, '\n');
      return;
    };

    insertBreak();
  };

  return editor;
};
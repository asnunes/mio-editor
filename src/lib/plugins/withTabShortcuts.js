import { Range, Transforms } from 'slate';

export const withTabShortcuts = editor => {
  editor.insertTabSpace = () => {
    Transforms.insertText(editor, "    ");
  }

  return editor;
};

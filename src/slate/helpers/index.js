import { Editor, Transforms, Text } from "slate"

export const MioEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: node => node.bold === true,
      universal: true,
    });

    return !!match;
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.node(editor, {
      match: node => node.type === 'code',
    });
    return !!match;
  },

  toggleBoldMark(editor) {
    const isActive = MioEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: node => Text.isText(node), split: true}
      );
  },

  toggleCodeBlock(editor) {
    const isActive = MioEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'code' },
      { match: node => Editor.isBlock(editor, node) }
      );
  }
};
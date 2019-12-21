import { Editor, Transforms, Text } from "slate"

export const MioEditor = {
  isMarkActive(editor, markType) {
    const [match] = Editor.nodes(editor, {
      match: node => node[markType] === true,
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

  toggleMark(editor, markType) {
    const isActive = MioEditor.isMarkActive(editor, markType);
    Transforms.setNodes(
      editor,
      { [markType]: isActive ? null : true },
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
import { Editor, Transforms, Text } from "slate"

export const MioHelpers = {
  isMarkActive(editor, markType) {
    const [match] = Editor.nodes(editor, {
      match: node => node[markType] === true,
      universal: true,
    });

    return !!match;
  },
  isLineEmpty(editor) {
    const [match] = Editor.nodes(editor, {
      match: node => node.text === '',
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
    const isActive = MioHelpers.isMarkActive(editor, markType);
    Transforms.setNodes(
      editor,
      { [markType]: isActive ? null : true },
      { match: node => Text.isText(node), split: true}
      );
  },

  toggleCodeBlock(editor) {
    const isActive = MioHelpers.isCodeBlockActive(editor);
    console.log(isActive);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'code' },
      { match: node => Editor.isBlock(editor, node) }
      );
  }
};
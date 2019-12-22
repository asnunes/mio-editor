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

  isBlockActive(editor, blockType) {
    const [match] = Editor.nodes(editor, {
      match: node => node.type === blockType,
    });
    console.log(blockType);
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

  toggleBlock(editor, blockType) {
    const isActive = MioHelpers.isBlockActive(editor, blockType);
    console.log(isActive);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : blockType },
      );
  }
};
import { Editor, Transforms, Text } from "slate";
import isHotkey from 'is-hotkey';

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
    Transforms.setNodes(
      editor,
      { type: isActive ? null : blockType },
      );
  },
  insertImage(editor, base64) {
    Transforms.setNodes(
      editor,
      { type: "image", base64 }
    );
  },
  insertMathBlock(editor) {
    console.log("me chamou");
  },
  onKeyDown(event, editor) {
    Object.keys(HOTKEYS).some(key => {
      if (isHotkey(key, event)) {
        HOTKEYS[key](event, editor);
        return true;
      }
    });
  }
};

const HOTKEYS = {
  "mod+h": (event, editor) => onBlockHotkeyDown(event, editor, "header"),
  "mod+c": (event, editor) => onMarkHotkeyDown(event, editor, "code"),
  "mod+b": (event, editor) => onMarkHotkeyDown(event, editor, "bold"),
  "mod+s": (event, editor) => onMarkHotkeyDown(event, editor, "strikethrough"),
  "mod+i": (event, editor) => onMarkHotkeyDown(event, editor, "italic"),
  "mod+u": (event, editor) => onMarkHotkeyDown(event, editor, "underline"),
  "mod+=": (event, editor) => onMathBlockKeyDown(event, editor),
};

const onMathBlockKeyDown = (event, editor) => {
  preventDefaultForEventAndCall(event, MioHelpers.insertMathBlock, editor);
}

const onBlockHotkeyDown = (event, editor, blockType) => {
  preventDefaultForEventAndCall(event, MioHelpers.toggleBlock, editor, blockType);
};

const onMarkHotkeyDown = (event, editor, markType) => {
  preventDefaultForEventAndCall(event, MioHelpers.toggleMark, editor, markType);
};

const preventDefaultForEventAndCall = (event, fn, ...args) => {
  event.preventDefault();
  fn(...args);
};
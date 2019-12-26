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
    if (!MioHelpers.isBlockActive(editor, 'paragraph')) return;

    const isActive = MioHelpers.isMarkActive(editor, markType);
    Transforms.setNodes(
      editor,
      { [markType]: isActive ? null : true },
      { match: node => Text.isText(node), split: true }
    );
  },
  toggleBlock(editor, blockType) {
    const isActive = MioHelpers.isBlockActive(editor, blockType);
    if (blockType === 'math' && !MioHelpers.isLineEmpty(editor)) return Editor.insertText(editor, "$");
    
    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : blockType },
    );
  },
  insertImage(editor, base64) {
    Transforms.setNodes(
      editor,
      { type: "image", base64 }
    );
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
  "mod+;": (event, editor) => onMarkHotkeyDown(event, editor, "code"),
  "mod+b": (event, editor) => onMarkHotkeyDown(event, editor, "bold"),
  "mod+s": (event, editor) => onMarkHotkeyDown(event, editor, "strikethrough"),
  "mod+i": (event, editor) => onMarkHotkeyDown(event, editor, "italic"),
  "mod+u": (event, editor) => onMarkHotkeyDown(event, editor, "underline"),
  "mod+=": (event, editor) => onBlockHotkeyDown(event, editor, "math"),
  "mod+e": (event, editor) => onInlineMathKeyDown(event, editor),
  "enter": (event, editor) => onReturnKeyDown(event, editor),
};

const onInlineMathKeyDown = (event, editor) => {
  event.preventDefault();
  Transforms.insertNodes(
    editor,
    { type: "inlineMath", children: [{ text: ""}] },
  );
};

const onReturnKeyDown = (event, editor) => {
  if (MioHelpers.isBlockActive(editor, "math"))
    setTimeout(() => MioHelpers.toggleBlock(editor, 'paragraph'), 0);
  if (MioHelpers.isBlockActive(editor, "image"))
    Transforms.insertNodes(
      editor,
      { type: 'paragraph', children: [{ text: ""}] },
    );
};

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
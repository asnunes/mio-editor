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
  clearMarks(editor) {
    Transforms.setNodes(
      editor,
      LEAVES.reduce((acc, markType) => ({ [markType]: null, ...acc}), {}),
      { match: node => Text.isText(node), split: true }
    );
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
    if (!isActive) MioHelpers.clearMarks(editor);
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
      } return false;
    });
  }
};

const LEAVES = ['bold', 'italic', 'strikethrough', 'underline', 'code'];

const HOTKEYS = {
  "mod+h": (event, editor) => onBlockHotkeyDown(event, editor, "header"),
  "mod+;": (event, editor) => onCodeKeyDown(event, editor),
  "mod+b": (event, editor) => onMarkHotkeyDown(event, editor, "bold"),
  "mod+s": (event, editor) => onMarkHotkeyDown(event, editor, "strikethrough"),
  "mod+i": (event, editor) => onMarkHotkeyDown(event, editor, "italic"),
  "mod+u": (event, editor) => onMarkHotkeyDown(event, editor, "underline"),
  "mod+=": (event, editor) => onBlockHotkeyDown(event, editor, "math"),
  "mod+e": (event, editor) => onInlineMathKeyDown(event, editor),
  "enter": (event, editor) => onReturnKeyDown(event, editor),
  "shift+enter": (event, editor) => onShiftReturnKeyDown(event, editor),
  "tab": (event, editor) => onTabKeyDown(event, editor),
};

const onInlineMathKeyDown = (event, editor) => {
  event.preventDefault();
  Transforms.insertNodes(
    editor,
    { type: "inlineMath", children: [{ text: ""}] },
  );
};

const onCodeKeyDown = (event, editor) => {
  const toggleBlockOrMark = MioHelpers.isLineEmpty(editor) ? 
    MioHelpers.toggleBlock : MioHelpers.toggleMark;

  return preventDefaultForEventAndCall(event, toggleBlockOrMark, editor, 'code');
}

const onShiftReturnKeyDown = (event, editor) => {
  event.preventDefault();
  if (MioHelpers.isBlockActive(editor, "code") || MioHelpers.isBlockActive(editor, "image"))
    insertNewParagraph(editor);
};

const onTabKeyDown = (event, editor) => {
  if (!MioHelpers.isBlockActive(editor, "math") && !MioHelpers.isBlockActive(editor, "image"))
    preventDefaultForEventAndCall(event, editor.insertTabSpace);
};

const onReturnKeyDown = (event, editor) => {
  if (MioHelpers.isBlockActive(editor, "math"))
    setTimeout(() => MioHelpers.toggleBlock(editor, 'paragraph'), 0);
  if (MioHelpers.isBlockActive(editor, "image"))
    insertNewParagraph(editor);
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

const insertNewParagraph = editor => {
  Transforms.insertNodes(
    editor,
    { type: 'paragraph', children: [{ text: ""}] },
  );
};

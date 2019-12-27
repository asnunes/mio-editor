import { Range, Editor, Transforms } from 'slate';

export const withInlineMath = editor => {
  const { insertText, deleteBackward, isInline, isVoid } = editor;

  editor.insertText = text => {
    const { selection } = editor;

    if (_noSelection(selection)) {
      const { anchor } = selection;
      const { path } = anchor;
      const blockStart = Editor.start(editor, path);
      const blockRange = { anchor, focus: blockStart }; 
      const blockText = Editor.string(editor, blockRange);
      const lastSpaceIndex = blockText.lastIndexOf(" ") === -1 ? 0 : blockText.lastIndexOf(" ");
      const textAfterLastSpace = blockText.slice(lastSpaceIndex);

      const [especialCharLastButOneRelativeIndex, especialCharLastRelativeIndex] = _findLastTwoIndexOf(textAfterLastSpace, '$');

      if (_isThereTextBetweenTwo$(especialCharLastButOneRelativeIndex, especialCharLastRelativeIndex)){
        const especialCharLastButOneIndex = especialCharLastButOneRelativeIndex + lastSpaceIndex;
        const fromLastButOneCharToEndRange = { anchor, focus: { path, offset: especialCharLastButOneIndex - blockStart.offset } };

        _insertInlineMathAt(editor, fromLastButOneCharToEndRange);
      }
    }

    insertText(text);
  };

  editor.deleteBackward = (...args) => {
    const { selection } = editor;

    if (_noSelection(selection)) {
      const { anchor } = selection;
      const { path } = anchor;

      const endPoint = Editor.end(editor, path);

      if (_isThereAInlineMathBlockPrevious(editor, endPoint) &&
        _isCurrentPointTheStartOfLocation(editor, endPoint, path)
      ) {
        const InlineMathBlock = _getPreviousBlock(editor, endPoint);
        const mathContent = InlineMathBlock.content;
        deleteBackward(...args);
        editor.insertText('$' + mathContent);
      } else {
        deleteBackward(...args);
      }
    }
  };

  editor.isInline = element => {
    return element.type === "inlineMath" ? true : isInline(element);
  };

  editor.isVoid = element => {
    return element.type === 'inlineMath'? true : isVoid(element);
  };

  return editor;
};

const _isThereAInlineMathBlockPrevious = (editor, endPoint) => {
  const previousBlock = _getPreviousBlock(editor, endPoint);
  return previousBlock && previousBlock.type === "inlineMath";
};

const _isCurrentPointTheStartOfLocation = (editor, endPoint, path) => Editor.isStart(editor, endPoint, path);

const _noSelection = selection => selection && Range.isCollapsed(selection);

const _isThereTextBetweenTwo$ = (first$Index, second$charIndex) => {
  return first$Index !== -1 && second$charIndex !== 1;
}

const _findLastTwoIndexOf = (string, char) => {
  const charLastIndex = string.lastIndexOf(char);

  if (charLastIndex === -1) return [-1, -1];

  const charLastButOneIndex = string.slice(0, charLastIndex).lastIndexOf(char);
  
  return [charLastButOneIndex, charLastIndex];
};

const _getPreviousBlock = (editor, endPoint) => {
  const previousNode = Editor.previous(editor, { at: endPoint } );
  return previousNode && previousNode[0];
};

const _insertInlineMathAt = (editor, range) => {
  const content = Editor.string(editor, range);

  Transforms.select(editor, range);
  Transforms.delete(editor);
  Transforms.insertNodes(
    editor,
    { type: 'inlineMath', content: content.slice(1,-1), children: [{ text: "" }] }
  );
};
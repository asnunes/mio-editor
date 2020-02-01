import { CodeDispatcher, ParagraphDispatcher, BaseDispatcher, HeaderDispatcher } from '.';
import { FragmentNode, TextNode } from "../nodes";

export class FragmentDispatcher extends BaseDispatcher {
  constructor(element) {
    super(element);
  }

  dispatch() {
    return new FragmentNode(this._dispatchedChildren())
  }

  _dispatchedChild(child) {
    const nodeName = child.nodeName.toLowerCase();
    
    if (PARAGRAPH_TAGS.includes(nodeName)) return new ParagraphDispatcher(child).dispatch();
    if (CODE_TAGS.includes(nodeName)) return new CodeDispatcher(child).dispatch();
    if (HEADER_TAGS.includes(nodeName)) return new HeaderDispatcher(child).dispatch();
    if (LINE_BREAK_TAGS.includes(nodeName)) return new TextNode('\n');
    return new TextNode(child.textContent);
  }
}

const PARAGRAPH_TAGS = ['p', 'div'];
const CODE_TAGS = ['code', 'pre'];
const HEADER_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const LINE_BREAK_TAGS = ['br'];
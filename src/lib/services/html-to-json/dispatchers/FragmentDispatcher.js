import { BaseDispatcher, BlockDispatcher } from '.';
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
    
    if (PARAGRAPH_TAGS.includes(nodeName)) return new BlockDispatcher('paragraph', child).dispatch();
    if (LINE_BREAK_TAGS.includes(nodeName)) return new TextNode('\n');
    return new TextNode(child.textContent);
  }
}

const FRAGMENT_TAGS = ['body'];
const PARAGRAPH_TAGS = ['p', 'div'];
const LEAVES_TAGS = ['b', 'strong', 'i', 'em', 's', 'strike', 'u', 'code', 'span'];
const LINE_BREAK_TAGS = ['br'];
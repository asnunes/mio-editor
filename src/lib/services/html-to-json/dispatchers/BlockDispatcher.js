import { BaseDispatcher, LeavesDispatcher } from ".";
import { ElementNode, TextNode } from "../nodes";

export class BlockDispatcher extends BaseDispatcher {
  constructor(type, element) {
    super(element);
    this.type = type;
  }

  dispatch() {
    return new ElementNode(this.type, this._dispatchedChildren().flat(Infinity));
  }

  _dispatchedChild(child) {
    const nodeName = child.nodeName.toLowerCase();
    
    if (LEAFABLE_TAGS.includes(nodeName)) return new LeavesDispatcher(child, this._allowedTags()).dispatch();
    if (LINE_BREAK_TAGS.includes(nodeName)) return new TextNode('\n');
    return new TextNode(child.textContent);
  }

  _allowedTags() {
    return ['b', 'strong', 'i', 'em', 's', 'strike', 'u', 'code', 'span'];
  }
}

const LEAFABLE_TAGS = ['b', 'strong', 'i', 'em', 's', 'strike', 'u', 'code', 'span'];
const LINE_BREAK_TAGS = ['br'];
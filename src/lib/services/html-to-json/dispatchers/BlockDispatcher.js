import { BaseDispatcher, LeavesDispatcher } from ".";
import { ElementNode, TextNode } from "../nodes";

export class BlockDispatcher extends BaseDispatcher {
  constructor(element) {
    super(element);
    this.type = 'paragraph';
  }

  dispatch() {
    return new ElementNode(this.type, this._dispatchedChildren().flat(Infinity));
  }

  _dispatchedChild(child) {
    const nodeName = child.nodeName.toLowerCase();
    
    if (nodeName === "#text") return new TextNode(child.textContent);
    if (LINE_BREAK_TAGS.includes(nodeName)) return new TextNode('\n');
    return new LeavesDispatcher(child, this._allowedTags()).dispatch();
  }

  _allowedTags() {
    throw new Error(`Subclass method called at superclass: ${this.constructor.name}`);
  }
}

const LINE_BREAK_TAGS = ['br'];
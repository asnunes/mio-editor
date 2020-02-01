import { BaseDispatcher, LeavesDispatcher, InlineMathDispatcher, MathDispatcher } from ".";
import { ElementNode, TextNode } from "../nodes";

export class BlockDispatcher extends BaseDispatcher {
  constructor(element) {
    super(element);
  }

  dispatch() {
    if (this._isOnlyChildAMathElement()) return new MathDispatcher(this.element).dispatch();
    return new ElementNode(this.type, this._dispatchedChildren().flat(Infinity));
  }

  _dispatchedChild(child) {
    const nodeName = child.nodeName.toLowerCase();
    
    if (nodeName === "#text") return new TextNode(child.textContent);
    if (MATH_TAGS.includes(nodeName)) return new InlineMathDispatcher(child).dispatch();
    if (LINE_BREAK_TAGS.includes(nodeName)) return new TextNode('\n');
    return new LeavesDispatcher(child, this._allowedTags()).dispatch();
  }

  _allowedTags() {
    throw new Error(`Subclass method called at superclass: ${this.constructor.name}`);
  }

  _isOnlyChildAMathElement() {
    const children = Array.from(this.element.childNodes);
    return children.length === 1 && MATH_TAGS.includes(children[0].nodeName.toLowerCase());
  }
}

const LINE_BREAK_TAGS = ['br'];
const MATH_TAGS = ['math'];
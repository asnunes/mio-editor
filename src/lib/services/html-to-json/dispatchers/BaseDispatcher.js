import { TextNode } from "../nodes";

export class BaseDispatcher {
  constructor(element) {
    this.element = element;
  }

  _dispatchedChildren() {
    const children = Array.from(this.element.childNodes);
    if (children.length === 0) return [ new TextNode("") ];

    return children.map(child => this._dispatchedChild(child));
  }

  _dispatchedChild() {
    throw new Error(`Subclass method called at superclass: ${this.constructor.name}`);
  }
}
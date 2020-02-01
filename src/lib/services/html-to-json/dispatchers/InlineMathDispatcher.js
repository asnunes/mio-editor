import Mathml2asciimath from 'mathml2asciimath';
import { ElementNode, TextNode } from '../nodes';

export class InlineMathDispatcher {
  constructor(element) {
    this.element = element;
    this._children = [new TextNode("")];
  }

  dispatch() {
    return new ElementNode('inlineMath', this._children, { content: this._mathContent() });
  }

  _mathContent() {
    return new Mathml2asciimath(this.element.outerHTML).convert();
  }
}
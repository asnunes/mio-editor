import Mathml2asciimath from 'mathml2asciimath';
import { ElementNode, TextNode } from '../nodes';

export class MathDispatcher {
  constructor(element) {
    this.element = element;
    this._children = [new TextNode(this._mathContent())];
  }

  dispatch() {
    return new ElementNode('math', this._children);
  }

  _mathContent() {
    return new Mathml2asciimath(this.element.outerHTML).convert();
  }
}
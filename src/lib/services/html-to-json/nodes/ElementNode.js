import { jsx } from 'slate-hyperscript';
import { BaseNode } from './BaseNode';

export class ElementNode extends BaseNode {
  constructor(element, type, children) {
    super(element);
    this.type = type;
    this.children = children;
  }

  deserialize() {
    return jsx('element', { type: this.type }, this.children);
  }
}
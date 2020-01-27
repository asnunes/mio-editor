import { jsx } from 'slate-hyperscript';

export class ElementNode {
  constructor(type, children) {
    this.type = type;
    this.children = children;
  }

  deserialize() {
    return jsx('element', { type: this.type }, this.children);
  }
}
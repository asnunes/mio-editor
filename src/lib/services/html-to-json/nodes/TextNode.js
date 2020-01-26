import { jsx } from 'slate-hyperscript';
import { BaseNode } from './BaseNode';

export class TextNode extends BaseNode {
  constructor(element, attr, children) {
    super(element);
    this.attr = attr;
    this.children = children;
  }

  deserialize() {
    return jsx('text', { [this.attr]: true }, this.textContent);
  }
}
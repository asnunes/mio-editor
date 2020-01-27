import { jsx } from 'slate-hyperscript';

export class TextNode {
  constructor(textContent, attr, children) {
    this.textContent = textContent;
    this.attr = attr;
    this.children = children;
  }

  deserialize() {
    return jsx('text', { [this.attr]: true }, this.textContent);
  }
}
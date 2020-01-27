import { JsxInterface } from '../interface';

export class TextNode {
  constructor(textContent, attr, children) {
    this.textContent = textContent;
    this.attr = attr;
    this.children = children;
  }

  deserialize() {
    return new JsxInterface('text', { [this.attr]: true }, this.textContent).toJSON();
  }
}
import { JsxInterface } from '../interface';

export class ElementNode {
  constructor(type, children) {
    this.type = type;
    this.children = children;
  }

  deserialize() {
    return new JsxInterface('element', { type: this.type }, this.children).toJSON();
  }
}
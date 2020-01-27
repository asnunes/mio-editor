import { jsx } from 'slate-hyperscript';

export class JsxInterface {
  constructor(type, payload = {}, children = []) {
    this.type = type;
    this.payload = payload;
    this.children = children
  }

  toJSON() {
    return jsx(this.type, this.payload, this.children);
  }
}
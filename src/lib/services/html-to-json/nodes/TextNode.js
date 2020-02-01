import { JsxInterface } from "../interface";

export class TextNode {
  constructor(textContent, leaves=[]) {
    this.textContent = textContent;
    this.leaves = leaves;
  }

  deserialize() {
    return this.leaves.length > 0 ? 
      new JsxInterface('text', this._leavesFlags(), this.textContent).toJSON() :
      this.textContent;
  }

  _leavesFlags() {
    return this.leaves.reduce((acc, leaf) => Object.assign({ [leaf]: true }, acc), {});
  }
}
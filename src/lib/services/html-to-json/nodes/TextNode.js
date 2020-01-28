import { JsxInterface } from '../interface';

export class TextNode {
  constructor(textContent, attrs, children) {
    this.textContent = textContent;
    this.attrs = Array.isArray(attrs) ? attrs : attrs.split();
    this.children = children;
  }

  deserialize() {
    if (this._isOnlyChildATextNode())
      return Object.assign(this._marksObject(), this.children[0].deserialize());

    return new JsxInterface('text', this._marksObject(), this.textContent).toJSON();
  }

  _marksObject() {
    return this.attrs.reduce((acc, attr) => {
      return Object.assign({ [attr]: true }, acc);
    }, {});
  }

  _isOnlyChildATextNode(){
    return this.children.length === 1 && this.children[0].constructor.name === 'TextNode';
  }
}
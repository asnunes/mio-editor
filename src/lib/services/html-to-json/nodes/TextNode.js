import { JsxInterface } from '../interface';

export class TextNode {
  constructor(textContent, attr, children) {
    this.textContent = textContent;
    this.attr = attr;
    this.children = children;
    console.log(children, textContent);
  }

  deserialize() {
    if (this._isOnlyChildATextNode())
      return Object.assign({ [this.attr]: true }, this.children[0].deserialize());

    return new JsxInterface('text', { [this.attr]: true }, this.textContent).toJSON();
  }

  _isOnlyChildATextNode(){
    return this.children.length === 1 && this.children[0].constructor.name === 'TextNode';
  }
}
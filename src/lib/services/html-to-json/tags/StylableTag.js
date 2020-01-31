import { TextNode } from "../nodes";

export class StylableTag {
  constructor(textContent, style, children) {
    this.textContent = textContent;
    this.style = style;
    this.children = children;
  }

  deserialize() {
    return this._node().deserialize();
  }

  _node() {
    return new TextNode(this.textContent, this._leaves(), this.children);
  }

  _leaves() {
    const textDecoration = this.style['text-decoration'];
    return LEAVES_TO_DECORATION
      .filter(relation => textDecoration.match(relation['decoration']))
      .map(relation => relation['leaf'])
      ;
  }
}

const LEAVES_TO_DECORATION = [
  { leaf: 'underline', decoration: 'underline' },
  { leaf: 'strikethrough', decoration: 'line-through' },
  { leaf: 'code', decoration: 'monospace' },
]
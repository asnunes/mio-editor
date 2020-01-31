import { TextNode } from "../nodes";

export class LeafTag {
  constructor(nodeName, textContent, children) {
    this.nodeName = nodeName;
    this.textContent = textContent;
    this.children = children;
  }

  deserialize() {
    return this._node().deserialize();
  }

  _node() {
    return new TextNode(this.textContent, this._leaf(), this.children);
  }

  _leaf(){
    switch (this.nodeName) {
      case 'b':
      case 'strong':
        return 'bold';
      case 'i':
      case 'em':
        return 'italic';
      case 'u':
        return 'underline';
      case 's':
      case 'strike':
        return 'strikethrough';
      case 'code':
        return 'code';
      default: throw new Error(`Unknow leaf ${this.nodeName.toLowerCase()}`);
    }
  }
}
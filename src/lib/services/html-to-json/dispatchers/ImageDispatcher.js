import { ElementNode, TextNode } from "../nodes";

export class ImageDispatcher {
  constructor(element) {
    this.type= element.type;
    this._children = [ new TextNode("") ];
    this._src = element.src;
  }

  dispatch() {
    return new ElementNode('image', this._children, { "base64": this._src });
  }
}
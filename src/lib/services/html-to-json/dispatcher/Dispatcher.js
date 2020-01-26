import { BaseNode, FragmentNode, ElementNode, TextNode } from '../nodes';

export class Dispatcher {
  constructor(element, children=[]){
    this.element = element;
    this.children = children;
  }

  dispatch() {
    switch (this.element.nodeName) {
      case 'BODY':
        return new FragmentNode(this.element, this.children).deserialize();
      case 'P':
        return new ElementNode(this.element, 'paragraph', this.children).deserialize();
      case 'STRONG':
        return new TextNode(this.element, 'bold', this.children).deserialize();
      case 'BR':
        return "\n";
      default:
        return new BaseNode(this.element).deserialize();
    }
  }
}
import { BaseNode, FragmentNode, ElementNode, TextNode } from '../nodes';

export class Dispatcher {
  constructor(element, children=[]){
    this.element = element;
    this.children = children;
  }

  dispatch() {
    switch (this.element.nodeName) {
      case 'BODY':
        return new FragmentNode(this.children);
      case 'P':
        return new ElementNode('paragraph', this.children);
      case 'STRONG':
        return new TextNode(this.element.textContent, 'bold', this.children);
      case 'BR':
        return new BaseNode("\n");
      default:
        return new BaseNode(this.element.textContent);
    }
  }
}
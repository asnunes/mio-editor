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
      case 'B':
      case 'STRONG':
        return new TextNode(this.element.textContent, 'bold', this.children);
      case "I":
      case 'EM':
        return new TextNode(this.element.textContent, 'italic', this.children);
      case 'S':
      case 'STRIKE':
        return new TextNode(this.element.textContent, 'strikethrough', this.children);
      case 'U':
        return new TextNode(this.element.textContent, 'underline', this.children);
      case 'SPAN':
        if (this.element.style['text-decoration'] === 'underline')
          return new TextNode(this.element.textContent, 'underline', this.children);
        return new BaseNode(this.element.textContent);
      case 'BR':
        return new BaseNode("\n");
      default:
        return new BaseNode(this.element.textContent);
    }
  }
}
import { BaseNode, FragmentNode, ElementNode, TextNode } from '../nodes';

export class Dispatcher {
  constructor(element){
    this.element = element;
  }

  dispatch() {
    const children = Array.from(this.element.childNodes).map(child => new Dispatcher(child).dispatch());

    switch (this.element.nodeName) {
      case 'BODY':
        return new FragmentNode(children);
      case 'P':
        return new ElementNode('paragraph', children);
      case 'B':
      case 'STRONG':
        return new TextNode(this.element.textContent, 'bold', children);
      case "I":
      case 'EM':
        return new TextNode(this.element.textContent, 'italic', children);
      case 'S':
      case 'STRIKE':
        return new TextNode(this.element.textContent, 'strikethrough', children);
      case 'U':
        return new TextNode(this.element.textContent, 'underline', children);
      case 'SPAN':
        if (this.element.style['text-decoration'] === 'underline')
          return new TextNode(this.element.textContent, 'underline', children);
        if (this.element.style['text-decoration'] === 'strikethrough')
          return new TextNode(this.element.textContent, 'strikethrough', children);
        return new BaseNode(this.element.textContent);
      case 'BR':
        return new BaseNode("\n");
      default:
        return new BaseNode(this.element.textContent);
    }
  }
}
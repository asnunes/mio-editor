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
      case 'CODE':
        return new TextNode(this.element.textContent, 'code', children);
      case 'SPAN':
        const leaves = this._leaves();

        if (leaves.length > 0) return new TextNode(this.element.textContent, leaves, children);
        return new BaseNode(this.element.textContent);
      case 'BR':
        return new BaseNode("\n");
      default:
        return new BaseNode(this.element.textContent);
    }
  }

  _leaves() {
    const textDecoration = this.element.style['text-decoration'];
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
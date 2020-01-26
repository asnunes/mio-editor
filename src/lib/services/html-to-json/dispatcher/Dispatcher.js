import { jsx } from 'slate-hyperscript';
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
        return jsx('fragment', {}, this.children);
      case 'P':
        return jsx('element', { type: 'paragraph' }, this.children);
      case 'STRONG':
        return jsx('text', { "bold": true }, this.element.textContent);
      case 'BR':
        return "\n";
      default:
        return this.element.textContent;
    }
  }
}
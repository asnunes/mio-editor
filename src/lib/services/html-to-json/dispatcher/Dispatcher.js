import { jsx } from 'slate-hyperscript';

export class Dispatcher {
  constructor(element, children=[]){
    this.element = element;
    this.children = children;
  }

  dispatch() {
    switch (this.element.nodeName) {
      case 'BODY':
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
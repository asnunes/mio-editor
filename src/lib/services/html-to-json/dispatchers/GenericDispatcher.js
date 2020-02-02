import { FragmentDispatcher, BlockDispatcher } from '.';
import { TextNode } from '../nodes';

export class GenericDispatcher {
  constructor(element){
    this.element = element;
  }

  dispatch() {
    const nodeName = this.element.nodeName.toLowerCase();
    
    if (FRAGMENT_TAGS.includes(nodeName)) return new FragmentDispatcher(this.element).dispatch();
    return new TextNode(this.element.textContent || '');
  }
}

const FRAGMENT_TAGS = ['body'];

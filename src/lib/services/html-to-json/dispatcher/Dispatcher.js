import { BaseNode, TextNode } from '../nodes';
import { Body, Paragraph, LeafTag, StylableTag } from '../tags';

export class Dispatcher {
  constructor(element){
    this.element = element;
  }

  dispatch() {
    const children = Array.from(this.element.childNodes).map(child => new Dispatcher(child).dispatch());

    const nodeName = this.element.nodeName.toLowerCase();
    
    return this._ifIsOneOfTagsThenReturn(nodeName, FRAGMENT_TAGS, () => new Body(children)) ||
      this._ifIsOneOfTagsThenReturn(nodeName, PARAGRAPH_TAGS, () => new Paragraph(children)) ||
      this._ifIsOneOfTagsThenReturn(nodeName, LEAVES_TAGS, () => new LeafTag(nodeName, this.element.textContent, children)) ||
      this._ifIsOneOfTagsThenReturn(nodeName, STYLABLE_TAGS, () => new StylableTag(this.element.textContent, this.element.style, children)) ||
      this._ifIsOneOfTagsThenReturn(nodeName, LINE_BREAK_TAGS, () => new BaseNode("\n")) ||
      new BaseNode(this.element.textContent);
  }

  _ifIsOneOfTagsThenReturn(tag, tags, fn){
    if (tags.includes(tag)) return fn();
  }
}

const FRAGMENT_TAGS = ['body'];
const PARAGRAPH_TAGS = ['p', 'div'];
const LEAVES_TAGS = ['b', 'strong', 'i', 'em', 's', 'strike', 'u', 'code'];
const STYLABLE_TAGS = ['span'];
const LINE_BREAK_TAGS = ['br'];
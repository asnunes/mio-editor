import { BaseDispatcher } from ".";
import { TextNode } from "../nodes";

export class LeavesDispatcher extends BaseDispatcher {
  constructor(element, allowedParentsLeaves, parentsLeaves=[]) {
    super(element);
    this.allowedParentsLeaves = allowedParentsLeaves;
    this.parentsLeaves = parentsLeaves;
  }

  dispatch() {
    return this._dispatchedChildren();
  }

  _dispatchedChild(child) {
    const nodeName = child.nodeName.toLowerCase();

    if (this._accumulatedAllowedTags().includes(nodeName))
      return new LeavesDispatcher(child, this._accumulatedAllowedTags(), this._accumulatedLeaves()).dispatch();
    
    if (LINE_BREAK_TAGS.includes(nodeName)) return new TextNode('\n');
    return new TextNode(child.textContent, this._accumulatedLeaves());
  }

  _accumulatedLeaves() {
    return this._leaf() ? this.parentsLeaves.concat(this._leaf()) : this.parentsLeaves;
  }

  _accumulatedAllowedTags() {
    return this._allowedTags().filter(leafTag => {
      return this.allowedParentsLeaves.indexOf(leafTag) !== -1;
    });
  }

  _allowedTags() {
    return ['b', 'strong', 'i', 'em', 's', 'strike', 'u', 'code', 'span'];
  }

  _leaf() {
    const nodeName = this.element.nodeName.toLowerCase();
    if (!this._accumulatedAllowedTags().includes(nodeName)) return;

    switch (nodeName) {
      case 'b':
      case 'strong':
        return 'bold';
      case 'i':
      case 'em':
        return 'italic';
      case 'u':
        return 'underline';
      case 's':
      case 'strike':
        return 'strikethrough';
      case 'code':
        return 'code';
    }
  }
}

const LINE_BREAK_TAGS = ['br'];
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

    if (this._accumulatedAllowedLeaves().includes(nodeName))
      return new LeavesDispatcher(child, this._accumulatedAllowedLeaves(), this._accumulatedLeaves()).dispatch();
    
    if (LINE_BREAK_TAGS.includes(nodeName)) return new TextNode('\n');
    return new TextNode(this.element.textContent, this._accumulatedLeaves());
  }

  _accumulatedLeaves() {
    return this.parentsLeaves.concat(this._leaf());
  }

  _accumulatedAllowedLeaves() {
    return this._allowedLeavesTags().filter(leafTag => {
      return this.allowedParentsLeaves.indexOf(leafTag) !== -1;
    });
  }

  _allowedLeavesTags() {
    return ['b', 'strong', 'i', 'em', 's', 'strike', 'u', 'code'];
  }

  _leaf() {
    const nodeName = this.element.nodeName.toLowerCase();

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
      default: 
        throw new Error(`Leaf not found: ${nodeName}`);
    }
  }
}

const LINE_BREAK_TAGS = ['br'];
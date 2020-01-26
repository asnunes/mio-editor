import { jsx } from 'slate-hyperscript';
import { BaseNode } from './BaseNode';

export class FragmentNode extends BaseNode {
  constructor(element, children) {
    super(element);
    this.children = children;
  }

  deserialize() {
    return jsx('fragment', {}, this.children);
  }
}
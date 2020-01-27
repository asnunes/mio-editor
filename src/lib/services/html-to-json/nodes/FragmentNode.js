import { jsx } from 'slate-hyperscript';

export class FragmentNode {
  constructor(children) {
    this.children = children;
  }

  deserialize() {
    return jsx('fragment', {}, this.children);
  }
}
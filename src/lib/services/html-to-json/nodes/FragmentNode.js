import { JsxInterface } from '../interface';

export class FragmentNode {
  constructor(children) {
    this.children = children;
  }

  deserialize() {
    return new JsxInterface('fragment', {}, this.children).toJSON();
  }
}
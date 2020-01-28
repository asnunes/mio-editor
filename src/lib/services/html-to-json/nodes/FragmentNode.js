import { JsxInterface } from '../interface';

export class FragmentNode {
  constructor(children) {
    this.children = children;
  }

  deserialize() {
    return new JsxInterface('fragment', {}, this._deserializedChildren()).toJSON();
  }

  _deserializedChildren(){
    return this.children.map(child => child.deserialize());
  }
}
import { JsxInterface } from '../interface';

export class ElementNode {
  constructor(type, children, elementProps={}) {
    this.type = type;
    this.children = children;
    this.elementProps = elementProps;
  }

  deserialize() {
    const props = Object.assign({ type: this.type }, this.elementProps);
    return new JsxInterface('element', props, this._deserializedChildren()).toJSON();
  }

  _deserializedChildren(){
    return this.children.map(child => child.deserialize());
  }
}
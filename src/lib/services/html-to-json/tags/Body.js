import { FragmentNode } from "../nodes";

export class Body {
  constructor(children) {
    this.children = children;
  }

  deserialize() {
    return this.node().deserialize();
  }

  node() {
    return new FragmentNode(this.children);
  }
}
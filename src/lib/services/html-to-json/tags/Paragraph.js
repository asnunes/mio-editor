import { ElementNode } from '../nodes';

export class Paragraph {
  constructor(children) {
    this.children = children;
  }

  deserialize() {
    return this.node().deserialize();
  }

  node() {
    return new ElementNode('paragraph', this.children);
  }
}
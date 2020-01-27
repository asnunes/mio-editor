export class BaseNode {
  constructor(textContent) {
    this.textContent = textContent;
  }

  deserialize() {
    return this.textContent;
  }
}
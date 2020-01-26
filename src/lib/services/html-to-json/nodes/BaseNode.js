export class BaseNode {
  constructor(element) {
    this.textContent = element.textContent;
  }

  deserialize() {
    return this.textContent;
  }
}
import { BlockDispatcher } from "./BlockDispatcher";

export class CodeDispatcher extends BlockDispatcher {
  constructor(element) {
    super(element);
    this.type = 'code';
  }

  _allowedTags() {
    return ['span'];
  }
}
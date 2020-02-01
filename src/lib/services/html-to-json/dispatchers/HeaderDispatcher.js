import { BlockDispatcher } from "./BlockDispatcher";

export class HeaderDispatcher extends BlockDispatcher {
  constructor(element) {
    super(element);
    this.type = 'header';
  }

  _allowedTags() {
    return ['span'];
  }
}
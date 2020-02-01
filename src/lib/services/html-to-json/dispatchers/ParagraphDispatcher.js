import { BlockDispatcher } from "./BlockDispatcher";

export class ParagraphDispatcher extends BlockDispatcher {
  constructor(element) {
    super(element);
    this.type = 'paragraph';
  }

  _allowedTags() {
    return ['b', 'strong', 'i', 'em', 's', 'strike', 'u', 'code', 'span'];
  }
}
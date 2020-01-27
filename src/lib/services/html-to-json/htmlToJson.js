import { Dispatcher } from './dispatcher/Dispatcher';

export const HtmlToJson = html => {
  const document = new DOMParser().parseFromString(html, 'text/html');

  return deserialize(document.body);
};

const deserialize = element => {
  if (_isTextNode(element)) return element.textContent;
  else if (_isNotElementNode(element)) return null;

  const children = Array.from(element.childNodes).map(deserialize);

  const nodeDeserialize = new Dispatcher(element, children).dispatch();
  return nodeDeserialize.deserialize();
};

const _isTextNode = element => element.nodeType === 3;
const _isNotElementNode = element => element.nodeType !== 1;
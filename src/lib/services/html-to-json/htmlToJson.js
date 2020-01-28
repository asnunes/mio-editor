import { Dispatcher } from './dispatcher/Dispatcher';

export const HtmlToJson = html => {
  const document = new DOMParser().parseFromString(html, 'text/html');

  return deserialize(document.body);
};

const deserialize = element => {
  if (isTextNode(element)) return element.textContent;
  else if (isNotElementNode(element)) return null;

  const nodeDeserializer = new Dispatcher(element).dispatch();
  return nodeDeserializer.deserialize();
};

const isTextNode = element => element.nodeType === 3;
const isNotElementNode = element => element.nodeType !== 1;
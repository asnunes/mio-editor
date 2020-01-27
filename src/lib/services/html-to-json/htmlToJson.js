import { Dispatcher } from './dispatcher/Dispatcher';

export const HtmlToJson = html => {
  const document = new DOMParser().parseFromString(html, 'text/html');

  return deserialize(document.body);
};

const deserialize = element => {
  if (element.nodeType === 3) return element.textContent;
  else if (element.nodeType !== 1) return null; //check node type 

  const children = Array.from(element.childNodes).map(deserialize);

  const nodeDeserialize = new Dispatcher(element, children).dispatch();
  return nodeDeserialize.deserialize();
};
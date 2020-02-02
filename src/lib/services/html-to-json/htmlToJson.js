import { GenericDispatcher } from './dispatchers';

export function htmlToJson(rawHtml) {
  const html = _removeLineBreaks(rawHtml);
  const document = new DOMParser().parseFromString(html, 'text/html');

  return deserialize(document.body);
};

const deserialize = element => {
  if (isTextNode(element)) return element.textContent;
  else if (isNotElementNode(element)) return null;

  const nodeDeserializer = new GenericDispatcher(element).dispatch();
  return nodeDeserializer.deserialize();
};

const isTextNode = element => element.nodeType === 3;
const isNotElementNode = element => element.nodeType !== 1;
const _removeLineBreaks = str => str.replace(/\n|\r\n|\r/g, '');
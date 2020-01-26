import { jsx } from 'slate-hyperscript';

export const HtmlToJson = html => {
  const document = new DOMParser().parseFromString(html, 'text/html');

  return deserialize(document.body);
};

const deserialize = element => {
  if (element.nodeType === 3) return element.textContent;
  else if (element.nodeType !== 1) return null; //check node type 

  const children = Array.from(element.childNodes).map(deserialize);

  switch (element.nodeName) {
    case 'BODY':
      return jsx('fragment', {}, children);
    case 'P':
      return jsx('element', { type: 'paragraph' }, children);
    case 'BR':
      return "\n";
    default:
      return element.textContent;
  }
};
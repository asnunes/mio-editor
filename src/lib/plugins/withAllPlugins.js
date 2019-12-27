import { withCode, withImage, withInlineMath } from '.';

export const withAllPlugins = editor => {
  [withCode, withImage, withInlineMath].forEach(plugin => {
    if (typeof plugin == 'function') plugin(editor);
  });

  return editor;
};
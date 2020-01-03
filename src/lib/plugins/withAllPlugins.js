import { withCode, withImage, withInlineMath, withTabShortcuts } from '.';

export const withAllPlugins = editor => {
  [withCode, withImage, withInlineMath, withTabShortcuts].forEach(plugin => {
    if (typeof plugin == 'function') plugin(editor);
  });

  return editor;
};
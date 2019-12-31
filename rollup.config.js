import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

function configure() {
  const input = 'src/lib/index.js';

  // Stop Rollup from warning about circular dependencies.
  const onwarn = warning => {
    if (warning.code !== 'CIRCULAR_DEPENDENCY') {
      console.warn(`(!) ${warning.message}`) // eslint-disable-line no-console
    }
  };

  const plugins = [
    resolve({
      browser: true,
    }),
    commonjs({
      exclude: `src/**`,
      namedExports: {
        'react-dom': ['findDOMNode'],
        'react-dom/server': ['renderToStaticMarkup'],
        'node_modules/immutable/dist/immutable.js': [
          'Iterable', 'Seq', 'Collection', 'Map', 'OrderedMap', 'List', 'Stack', 'Set',
          'OrderedSet', 'Record', 'Range', 'Repeat', 'is', 'fromJS'
        ],
        'prop-types': [
          'array',
          'bool',
          'func',
          'number',
          'object',
          'string',
          'symbol',
          'any',
          'arrayOf',
          'element',
          'elementType',
          'instanceOf',
          'node',
          'objectOf',
          'oneOf',
          'oneOfType',
          'shape',
          'exact',
        ],
        'node_modules/esrever/esrever.js': [ 'reverse' ]
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    babel({
      "presets": [
        "@babel/preset-react"
      ],
      exclude: 'node_modules/**',
    }),
    globals(),
    terser(),
  ].filter(Boolean);

  const globalsLibs = {
    "react": "React",
    "react-dom": "ReactDOM",
  };

  return {
    plugins,
    input,
    onwarn,
    output: {
      format: 'umd',
      file: `dist/mio-editor.min.js`,
      name: "MioEditor",
      globals: globalsLibs,
    },
    external: Object.keys(globalsLibs),
  }
}

export default configure();
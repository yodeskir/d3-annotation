import { babel } from '@rollup/plugin-babel'
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from 'rollup-plugin-node-resolve';

let pkg = require('./package.json');

export default {
  input: 'index.js',
  plugins: [
    commonjs(),
    babel(),
    nodeResolve()
  ],
  output: [
    {
      file: pkg.main,
      format: 'es',
      moduleName: 'd3',
      sourceMap: true,
      globals: {
        'd3-selection': 'd3',
        'd3-dispatch': 'd3',
        'd3-shape': 'd3',
        'd3-drag': 'd3'
      }
    }
  ]
};

const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const vue = require('rollup-plugin-vue');
const pkg = require('./package');

const now = new Date();
const banner = `/*!
 * vue-number-input v${pkg.version}
 * https://github.com/${pkg.repository}
 *
 * Copyright (c) ${now.getFullYear()} ${pkg.author.name}
 * Released under the ${pkg.license} license
 *
 * Date: ${now.toISOString()}
 */
`;

module.exports = {
  input: 'src/index.vue',
  output: [
    {
      banner,
      file: 'dist/vue-number-input.js',
      format: 'umd',
      name: 'VueNumberInput',
      globals: {
        vue: 'Vue',
      },
    },
    {
      banner,
      file: 'dist/vue-number-input.common.js',
      format: 'cjs',
    },
    {
      banner,
      file: 'dist/vue-number-input.esm.js',
      format: 'es',
    },
  ],
  external: ['vue'],
  plugins: [
    nodeResolve(),
    commonjs(),
    vue({
      autoStyles: false,
      css: true,
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
  ],
};

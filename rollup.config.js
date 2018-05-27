const babel = require('rollup-plugin-babel');
const changeCase = require('change-case');
const commonjs = require('rollup-plugin-commonjs');
const createBanner = require('create-banner');
const nodeResolve = require('rollup-plugin-node-resolve');
const vue = require('rollup-plugin-vue');
const pkg = require('./package');

pkg.name = pkg.name.replace(/^.+\//, '');

const banner = createBanner({
  data: {
    year: '2018-present',
  },
});

module.exports = {
  input: 'src/index.vue',
  output: [
    {
      banner,
      name: changeCase.pascalCase(pkg.name),
      file: `dist/${pkg.name}.js`,
      format: 'umd',
      globals: {
        vue: 'Vue',
      },
    },
    {
      banner,
      file: `dist/${pkg.name}.common.js`,
      format: 'cjs',
    },
    {
      banner,
      file: `dist/${pkg.name}.esm.js`,
      format: 'esm',
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
      plugins: ['external-helpers'],
    }),
  ],
};

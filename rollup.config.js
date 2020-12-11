import babel from '@rollup/plugin-babel';
import changeCase from 'change-case';
import createBanner from 'create-banner';
import postcss from 'rollup-plugin-postcss';
import vue from 'rollup-plugin-vue';
import pkg from './package.json';

pkg.name = pkg.name.replace(/^.+\//, '');

const name = changeCase.pascalCase(pkg.name);
const data = {
  year: '2018-present',
};
const banner = createBanner({
  data,
});
const globals = {
  vue: 'Vue',
};

export default {
  input: 'src/index.js',
  output: [
    {
      banner,
      globals,
      name,
      file: `dist/${pkg.name}.js`,
      format: 'umd',
    },
    {
      globals,
      name,
      banner: createBanner({
        data,
        template: 'inline',
      }),
      file: `dist/${pkg.name}.min.js`,
      format: 'umd',
      compact: true,
    },
    {
      banner,
      file: `dist/${pkg.name}.common.js`,
      format: 'cjs',
      exports: 'auto',
    },
    {
      banner,
      file: `dist/${pkg.name}.esm.js`,
      format: 'esm',
    },
  ],
  external: ['vue'],
  plugins: [
    vue({
      preprocessStyles: true,
    }),
    postcss({
      extensions: ['.css', '.scss'],
      minimize: true,
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    }),
  ],
};

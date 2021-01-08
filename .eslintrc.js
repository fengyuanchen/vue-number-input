module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.eslint.json',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  plugins: [
    '@typescript-eslint',
    'vue',
  ],
  rules: {
    'no-restricted-properties': 'off',
  },
  overrides: [
    {
      files: ['tests/**/*.ts'],
      env: {
        jest: true,
      },
    },
  ],
};

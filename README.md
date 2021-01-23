# vue-number-input

[![Build Status](https://img.shields.io/github/workflow/status/fengyuanchen/vue-number-input/ci/main.svg)](https://github.com/fengyuanchen/vue-number-input/actions) [![Coverage Status](https://img.shields.io/codecov/c/github/fengyuanchen/vue-number-input.svg)](https://codecov.io/gh/fengyuanchen/vue-number-input) [![Downloads](https://img.shields.io/npm/dm/@chenfengyuan/vue-number-input.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-number-input) [![Version](https://img.shields.io/npm/v/@chenfengyuan/vue-number-input.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-number-input) [![Gzip Size](https://img.shields.io/bundlephobia/minzip/@chenfengyuan/vue-number-input.svg)](https://unpkg.com/@chenfengyuan/vue-number-input/dist/vue-number-input.js)

> Number input component for Vue 3.

- [Docs](src/README.md)
- [Demo](https://fengyuanchen.github.io/vue-number-input)

## Main files

```text
dist/
├── vue-number-input.js         (UMD, default)
├── vue-number-input.min.js     (UMD, compressed)
├── vue-number-input.esm.js     (ECMAScript Module)
└── vue-number-input.esm.min.js (ECMAScript Module, compressed)
```

## Getting started

### Installation

```shell
npm install vue @chenfengyuan/vue-number-input
```

In browser:

```html
<script src="/path/to/vue.js"></script><!-- Vue.js is required -->
<script src="/path/to/vue-number-input.js"></script>
```

### Usage

```js
import Vue from 'vue';
import VueNumberInput from '@chenfengyuan/vue-number-input';

const app = Vue.createApp({});

app.component(VueNumberInput.name, VueNumberInput);
```

```html
<vue-number-input controls></vue-number-input>
```

## Browser support

Same as Vue 3.

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)

# vue-number-input

[![Coverage Status](https://img.shields.io/codecov/c/github/fengyuanchen/vue-number-input.svg)](https://codecov.io/gh/fengyuanchen/vue-number-input) [![Downloads](https://img.shields.io/npm/dm/@chenfengyuan/vue-number-input.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-number-input) [![Version](https://img.shields.io/npm/v/@chenfengyuan/vue-number-input.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-number-input) [![Gzip Size](https://img.shields.io/bundlephobia/minzip/@chenfengyuan/vue-number-input.svg)](https://unpkg.com/@chenfengyuan/vue-number-input/dist/vue-number-input.js)

> Number input component for Vue 3. For Vue 2, check out the [`v1`](https://github.com/fengyuanchen/vue-number-input/tree/v1) branch.

- [Docs](src/README.md)
- [Demo](https://fengyuanchen.github.io/vue-number-input)

## Main files

```text
dist/
├── vue-number-input.js         (UMD, default)
├── vue-number-input.min.js     (UMD, compressed)
├── vue-number-input.esm.js     (ECMAScript Module)
├── vue-number-input.esm.min.js (ECMAScript Module, compressed)
└── vue-number-input.d.ts       (TypeScript Declaration File)
```

## Getting started

### Installation

Using npm:

```shell
npm install vue@3 @chenfengyuan/vue-number-input@2
```

Using pnpm:

```shell
pnpm add vue@3 @chenfengyuan/vue-number-input@2
```

Using Yarn:

```shell
yarn add vue@3 @chenfengyuan/vue-number-input@2
```

Using CDN:

```html
<script src="https://unpkg.com/vue@3"></script><!-- Vue.js is required -->
<script src="https://unpkg.com/@chenfengyuan/vue-number-input@2"></script>
```

### Usage

```js
import { createApp } from 'vue';
import VueNumberInput from '@chenfengyuan/vue-number-input';

const app = createApp({});

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

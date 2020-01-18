# vue-number-input

[![Build Status](https://img.shields.io/travis/fengyuanchen/vue-number-input.svg)](https://travis-ci.org/fengyuanchen/vue-number-input) [![Coverage Status](https://img.shields.io/codecov/c/github/fengyuanchen/vue-number-input.svg)](https://codecov.io/gh/fengyuanchen/vue-number-input) [![Downloads](https://img.shields.io/npm/dm/@chenfengyuan/vue-number-input.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-number-input) [![Version](https://img.shields.io/npm/v/@chenfengyuan/vue-number-input.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-number-input)

> Number input component for [Vue.js](https://vuejs.org/).

- [Docs](src/README.md)
- [Demo](https://fengyuanchen.github.io/vue-number-input)

## Main

```text
dist/
├── vue-number-input.js        (UMD)
├── vue-number-input.min.js    (UMD, compressed)
├── vue-number-input.common.js (CommonJS, default)
└── vue-number-input.esm.js    (ES Module)
```

## Getting started

### Installation

```shell
npm install vue @chenfengyuan/vue-number-input
```

In browser:

```html
<script src="/path/to/vue.js"></script><!-- Vue.js is required -->
<script src="/path/to/vue-number-input.js"></script><!-- Register automatically once loaded -->
```

### Usage

```js
import Vue from 'vue';
import VueNumberInput from '@chenfengyuan/vue-number-input';

Vue.use(VueNumberInput);
// Or
Vue.component(VueNumberInput.name, VueNumberInput);
// Or
Vue.component('vue-number-input', VueNumberInput);
```

```html
<number-input controls></number-input>
```

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)

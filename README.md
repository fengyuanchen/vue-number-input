# vue-number-input

[![Build Status](https://travis-ci.org/fengyuanchen/vue-number-input.svg)](https://travis-ci.org/fengyuanchen/vue-number-input) [![Downloads](https://img.shields.io/npm/dm/@chenfengyuan/vue-number-input.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-number-input) [![Version](https://img.shields.io/npm/v/@chenfengyuan/vue-number-input.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-number-input)

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
npm install @chenfengyuan/vue-number-input vue
```

In browser:

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-number-input.js"></script>
```

### Usage

```js
import Vue from 'vue';
import VueNumberInput from '@chenfengyuan/vue-number-input';

Vue.component(VueNumberInput.name, VueNumberInput);
```

```html
<number-input controls></number-input>
```

In browser:

```html
<script>Vue.component(VueNumberInput.name, VueNumberInput);</script>
```

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+

## Contributing

Please read through our [contributing guidelines](.github/CONTRIBUTING.md).

## Versioning

Maintained under the [Semantic Versioning guidelines](http://semver.org).

## License

[MIT](http://opensource.org/licenses/MIT) © [Chen Fengyuan](http://chenfengyuan.com)

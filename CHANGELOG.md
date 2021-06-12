# [2.0.0-rc](https://github.com/fengyuanchen/vue-number-input/compare/v2.0.0-beta.1...v2.0.0-rc) (2021-06-12)



# [2.0.0-beta.1](https://github.com/fengyuanchen/vue-number-input/compare/v2.0.0-beta...v2.0.0-beta.1) (2021-04-10)


### Bug Fixes

* round the new value in the last setp ([c43a69f](https://github.com/fengyuanchen/vue-number-input/commit/c43a69f5b67c5e02fbd1eccb007c947aa5482f8e))
* should emit a single value ([cb8bed9](https://github.com/fengyuanchen/vue-number-input/commit/cb8bed9b9470882588e8b281466cea088afc0009))


### Features

* support to clear the input value through the keyboard ([fd9faf2](https://github.com/fengyuanchen/vue-number-input/commit/fd9faf23737fb568426fbbe0d879c076cb6cf419)), closes [#28](https://github.com/fengyuanchen/vue-number-input/issues/28)



# [2.0.0-beta](https://github.com/fengyuanchen/vue-number-input/compare/v2.0.0-alpha...v2.0.0-beta) (2021-01-16)



# [2.0.0-alpha](https://github.com/fengyuanchen/vue-number-input/compare/v1.2.1...v2.0.0-alpha) (2021-01-08)


* refactor!: upgrade to Vue 3 ([65be700](https://github.com/fengyuanchen/vue-number-input/commit/65be700df03c167abb347c546ba579035d59fc16))


### BREAKING CHANGES

* drop support for Vue 2.



## [1.2.1](https://github.com/fengyuanchen/vue-number-input/compare/v1.2.0...v1.2.1) (2020-01-18)


### Bug Fixes

* add `tabindex` attribute to control buttons ([05869bc](https://github.com/fengyuanchen/vue-number-input/commit/05869bcb058d06608085141b0260962b6f028262)), closes [#20](https://github.com/fengyuanchen/vue-number-input/issues/20)



# [1.2.0](https://github.com/fengyuanchen/vue-number-input/compare/v1.1.2...v1.2.0) (2019-10-19)


### Features

* add new `attrs` prop ([e8b1498](https://github.com/fengyuanchen/vue-number-input/commit/e8b1498fa485253392afe505c854f6967d6e5990))



## [1.1.2](https://github.com/fengyuanchen/vue-number-input/compare/v1.1.1...v1.1.2) (2019-10-02)


### Bug Fixes

* hide the spin box in number input box in Firefox ([580ec5c](https://github.com/fengyuanchen/vue-number-input/commit/580ec5c960c6b9bd4984631a1932321443673ba5)), closes [#17](https://github.com/fengyuanchen/vue-number-input/issues/17)



## [1.1.1](https://github.com/fengyuanchen/vue-number-input/compare/v1.1.0...v1.1.1) (2019-03-09)


### Bug Fixes

* add missing `-webkit-` prefix to `appearance` property ([f71d0ae](https://github.com/fengyuanchen/vue-number-input/commit/f71d0aeb2e6211e2b37dd66cc348fb035247c207)), closes [#12](https://github.com/fengyuanchen/vue-number-input/issues/12)
* force to override the number in the input box ([7d816d4](https://github.com/fengyuanchen/vue-number-input/commit/7d816d4ec7652160aae2b330e9502ce2e256fc9a)), closes [#13](https://github.com/fengyuanchen/vue-number-input/issues/13)



# [1.1.0](https://github.com/fengyuanchen/vue-number-input/compare/v1.0.0...v1.1.0) (2019-01-26)


### Features

* register as a Vue plugin ([b23b09e](https://github.com/fengyuanchen/vue-number-input/commit/b23b09ef0e14601f0bb8b673bd2313b77d6c2e28))
* register the component automatically once loaded ([e86eab1](https://github.com/fengyuanchen/vue-number-input/commit/e86eab1db441100f71e667e5edb297c1030f6830))



# [1.0.0](https://github.com/fengyuanchen/vue-number-input/compare/v0.5.3...v1.0.0) (2018-12-20)


### Bug Fixes

* avoid the size to less than 1px ([03d804d](https://github.com/fengyuanchen/vue-number-input/commit/03d804d418d1b21c971fe0e7df8a50cec2413bd9)), closes [#10](https://github.com/fengyuanchen/vue-number-input/issues/10)


### Performance Improvements

* avoid to trigger change event when created ([b1cd06f](https://github.com/fengyuanchen/vue-number-input/commit/b1cd06f901f5c2567e94cb3353f326514ac30ed0))



## [0.5.3](https://github.com/fengyuanchen/vue-number-input/compare/v0.5.2...v0.5.3) (2018-12-01)


### Bug Fixes

* sync value only when it is different ([7100b1f](https://github.com/fengyuanchen/vue-number-input/commit/7100b1f01923a9dd4e5927e181a6f1fb15ae8711)), closes [#8](https://github.com/fengyuanchen/vue-number-input/issues/8)
* update input value automatically ([b2dae7f](https://github.com/fengyuanchen/vue-number-input/commit/b2dae7f5358914d9e863b2a0604eaa2201ed7b1d)), closes [#9](https://github.com/fengyuanchen/vue-number-input/issues/9)



## [0.5.2](https://github.com/fengyuanchen/vue-number-input/compare/v0.5.1...v0.5.2) (2018-08-05)


### Bug Fixes

* the 0.30000000000000004 problem ([8f5a3e0](https://github.com/fengyuanchen/vue-number-input/commit/8f5a3e0f63ed46417fa80d597aa7c246fde65ba4)), closes [#6](https://github.com/fengyuanchen/vue-number-input/issues/6)



## [0.5.1](https://github.com/fengyuanchen/vue-number-input/compare/v0.5.0...v0.5.1) (2018-06-09)


### Bug Fixes

* change the input value only when it is mounted ([cada801](https://github.com/fengyuanchen/vue-number-input/commit/cada8012e9428e633188eab93b19cff6e35f8f17)), closes [#4](https://github.com/fengyuanchen/vue-number-input/issues/4)



# [0.5.0](https://github.com/fengyuanchen/vue-number-input/compare/v0.4.1...v0.5.0) (2018-06-06)


### Bug Fixes

* off auto complete ([d14af46](https://github.com/fengyuanchen/vue-number-input/commit/d14af4611b182615298e841db5806e00fac34615))


### Features

* add `placeholder` prop ([331caa6](https://github.com/fengyuanchen/vue-number-input/commit/331caa6a2a1828043a0df778ddd175cd63dce5c1))
* add `rounded` prop ([99dd179](https://github.com/fengyuanchen/vue-number-input/commit/99dd179d8e9b0438e867248e540d6f2a737a225d))



## [0.4.1](https://github.com/fengyuanchen/vue-number-input/compare/v0.4.0...v0.4.1) (2018-05-27)



# [0.4.0](https://github.com/fengyuanchen/vue-number-input/compare/v0.3.0...v0.4.0) (2018-05-27)


### Features

* add `inputtable` prop ([98131c9](https://github.com/fengyuanchen/vue-number-input/commit/98131c9d6890b7a0a4aa4f41b13891a766054f2e)), closes [#2](https://github.com/fengyuanchen/vue-number-input/issues/2)



# [0.3.0](https://github.com/fengyuanchen/vue-number-input/compare/v0.2.0...v0.3.0) (2018-03-25)



# [0.2.0](https://github.com/fengyuanchen/vue-number-input/compare/v0.1.0...v0.2.0) (2018-03-21)



# 0.1.0 (2018-03-13)




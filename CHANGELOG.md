# Changelog

## 1.2.1 (Jan 18, 2020)

- Add `tabindex="-1"` attribute to control buttons (#20).

## 1.2.0 (Oct 19, 2019)

- Add a new prop: `attrs` (#18).

## 1.1.2 (Oct 2, 2019)

- Hide the spin box in the number input box in Firefox (#17).

## 1.1.1 (Mar 9, 2019)

- Hide the spin box in number input box (#12).
- Force to override the number in the input box (#13).

## 1.1.0 (Jan 26, 2019)

- Support to use as a Vue plugin: `Vue.use(VueNumberInput)`.
- Support to use as a Vue component: `Vue.component(VueNumberInput.name, VueNumberInput)`.
- Register the component automatically once loaded in the browser.

## 1.0.0 (Dec 20, 2018)

- Limit the minimum value of width, height and border to 1px (#10).
- Avoid triggering change event when created for better performance.
- Refactor test suites for better code coverage.

## 0.5.3 (Dec 1, 2018)

- Fix the issue of triggering `change` event twice (#8).
- Fix the issue of input value updating (#9).

## 0.5.2 (Aug 5, 2018)

- Fix the `0.30000000000000004` problem (#6).

## 0.5.1 (Jun 9, 2018)

- Change the input value only when it is mounted (#4).

## 0.5.0 (Jun 6, 2018)

- Add 2 new props: `placeholder` and `rounded`.

## 0.4.1 (May 27, 2018)

- Fix wrong global name in window.

## 0.4.0 (May 27, 2018)

- Add a new prop: `inputtable`.

## 0.3.0 (Mar 25, 2018)

- Rename element class name from `vue-number-input` to `number-input`.

## 0.2.0 (Mar 21, 2018)

- Fix wrong output file name.
- Fix wrong export in browser.
- Drop native attributes support.

## 0.1.0 (Mar 13, 2018)

- Support 11 props: `center`, `controls`, `disabled`, `inline`, `max`, `min`, `name`, `readonly`, `size`, `step` and `value`.

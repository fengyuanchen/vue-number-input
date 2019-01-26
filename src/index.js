import NumberInput from './number-input.vue';

NumberInput.install = (Vue) => {
  Vue.component(NumberInput.name, NumberInput);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(NumberInput);
}

export default NumberInput;

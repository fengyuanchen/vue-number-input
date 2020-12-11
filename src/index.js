import VueNumberInput from './vue-number-input.vue';

VueNumberInput.install = (app) => {
  app.component(VueNumberInput.name, VueNumberInput);
};

export default VueNumberInput;

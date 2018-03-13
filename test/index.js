import Vue from 'vue';
import VueNumberInput from '../src/index.vue';

Vue.component(VueNumberInput.name, VueNumberInput);

describe('<vue-number-input>', () => {
  it('name', () => {
    const vm = new Vue({
      template: '<vue-number-input name="digit"></vue-number-input>',
    }).$mount();

    expect(vm.$el.querySelector('input').name).to.equal('digit');
  });

  it('value', () => {
    const vm = new Vue({
      template: '<vue-number-input :value="10"></vue-number-input>',
    }).$mount();

    expect(vm.$el.querySelector('input').valueAsNumber).to.equal(10);
  });

  it('min', () => {
    const vm = new Vue({
      template: '<vue-number-input :value="-1" :min="0"></vue-number-input>',
    }).$mount();

    expect(vm.$el.querySelector('input').valueAsNumber).to.equal(0);
  });

  it('max', () => {
    const vm = new Vue({
      template: '<vue-number-input :value="100" :max="10"></vue-number-input>',
    }).$mount();

    expect(vm.$el.querySelector('input').valueAsNumber).to.equal(10);
  });

  it('step', (done) => {
    const vm = new Vue({
      template: '<vue-number-input :step="2" controls></vue-number-input>',

      mounted() {

      },
    }).$mount();

    vm.$el.querySelector('button:last-child').click();
    setTimeout(() => {
      expect(vm.$el.querySelector('input').valueAsNumber).to.equal(2);
      done();
    }, 100);
  });

  it('size', () => {
    const vm = new Vue({
      template: '<vue-number-input size="small"></vue-number-input>',
    }).$mount();

    expect(vm.$el.classList.contains('vue-number-input--small')).to.be.true;
  });

  it('inline', () => {
    const vm = new Vue({
      template: '<vue-number-input inline></vue-number-input>',
    }).$mount();

    expect(vm.$el.classList.contains('vue-number-input--inline')).to.be.true;
  });

  it('center', () => {
    const vm = new Vue({
      template: '<vue-number-input center></vue-number-input>',
    }).$mount();

    expect(vm.$el.classList.contains('vue-number-input--center')).to.be.true;
  });

  it('controls', () => {
    const vm = new Vue({
      template: '<vue-number-input controls></vue-number-input>',
    }).$mount();

    expect(vm.$el.querySelectorAll('button').length).to.equal(2);
  });

  it('readonly', () => {
    const vm = new Vue({
      template: '<vue-number-input controls readonly></vue-number-input>',
    }).$mount();

    expect(vm.$el.querySelector('button').disabled).to.be.true;
    expect(vm.$el.querySelector('input').readOnly).to.be.true;
  });

  it('disabled', () => {
    const vm = new Vue({
      template: '<vue-number-input controls disabled></vue-number-input>',
    }).$mount();

    expect(vm.$el.querySelector('button').disabled).to.be.true;
    expect(vm.$el.querySelector('input').disabled).to.be.true;
  });
});

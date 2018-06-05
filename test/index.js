import Vue from 'vue';
import VueNumberInput from '../src/index.vue';

Vue.component(VueNumberInput.name, VueNumberInput);

describe('<number-input>', () => {
  it('center', () => {
    const vm = new Vue({
      template: '<number-input center></number-input>',
    }).$mount();

    expect(vm.$el.classList.contains('number-input--center')).to.be.true;
  });

  it('controls', () => {
    const vm = new Vue({
      template: '<number-input controls></number-input>',
    }).$mount();

    expect(vm.$el.querySelectorAll('button').length).to.equal(2);
  });

  it('disabled', () => {
    const vm = new Vue({
      template: '<number-input controls disabled></number-input>',
    }).$mount();

    expect(vm.$el.querySelector('button').disabled).to.be.true;
    expect(vm.$el.querySelector('input').disabled).to.be.true;
  });

  it('inline', () => {
    const vm = new Vue({
      template: '<number-input inline></number-input>',
    }).$mount();

    expect(vm.$el.classList.contains('number-input--inline')).to.be.true;
  });

  it('inputtable', () => {
    const vm = new Vue({
      template: '<number-input :inputtable="false"></number-input>',
    }).$mount();

    expect(vm.$el.querySelector('input').readOnly).to.be.true;
  });

  it('max', () => {
    const vm = new Vue({
      template: '<number-input :value="100" :max="10"></number-input>',
    }).$mount();

    expect(vm.$el.querySelector('input').valueAsNumber).to.equal(10);
  });

  it('min', () => {
    const vm = new Vue({
      template: '<number-input :value="-1" :min="0"></number-input>',
    }).$mount();

    expect(vm.$el.querySelector('input').valueAsNumber).to.equal(0);
  });

  it('name', () => {
    const vm = new Vue({
      template: '<number-input name="digit"></number-input>',
    }).$mount();

    expect(vm.$el.querySelector('input').name).to.equal('digit');
  });

  it('readonly', () => {
    const vm = new Vue({
      template: '<number-input controls readonly></number-input>',
    }).$mount();

    expect(vm.$el.querySelector('button').disabled).to.be.true;
    expect(vm.$el.querySelector('input').readOnly).to.be.true;
  });

  it('size', () => {
    const vm = new Vue({
      template: '<number-input size="small"></number-input>',
    }).$mount();

    expect(vm.$el.classList.contains('number-input--small')).to.be.true;
  });

  it('step', (done) => {
    const vm = new Vue({
      template: '<number-input :step="2" controls></number-input>',

      mounted() {

      },
    }).$mount();

    vm.$el.querySelector('button:last-child').click();
    setTimeout(() => {
      expect(vm.$el.querySelector('input').valueAsNumber).to.equal(2);
      done();
    }, 100);
  });

  it('value', () => {
    const vm = new Vue({
      template: '<number-input :value="10"></number-input>',
    }).$mount();

    expect(vm.$el.querySelector('input').valueAsNumber).to.equal(10);
  });
  
  it('round', (done) => {
    const vm = new Vue({
      template: '<number-input :step="2" controls></number-input>',

      mounted() {

      },
    }).$mount();

    vm.$el.querySelector('.number-input__input').val(2.123).trigger('input');
    setTimeout(() => {
      expect(vm.$el.querySelector('.number-input__input').valueAsNumber).to.equal(2);
      done();
    }, 100);
  });
});

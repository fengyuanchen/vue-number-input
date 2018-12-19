describe('prop#controls', () => {
  it('should not display the controls by default', () => {
    const vm = new Vue({
      template: '<number-input />',
    }).$mount();

    expect(vm.$el.querySelectorAll('.number-input__button').length).to.equal(0);
  });

  it('should display the controls', () => {
    const vm = new Vue({
      template: '<number-input controls />',
    }).$mount();

    expect(vm.$el.querySelectorAll('.number-input__button').length).to.equal(2);
  });

  it('should increase the number when click the plus control', (done) => {
    const vm = new Vue({
      data() {
        return {
          value: NaN,
        };
      },

      template: '<number-input v-model="value" controls />',
    }).$mount();

    vm.$el.querySelector('.number-input__button--plus').click();
    vm.$nextTick(() => {
      expect(vm.value).to.equal(1);
      expect(vm.$el.querySelector('.number-input__input').valueAsNumber).to.equal(1);
      done();
    });
  });

  it('should decrease the number when click the minus control', (done) => {
    const vm = new Vue({
      data() {
        return {
          value: NaN,
        };
      },

      template: '<number-input v-model="value" controls />',
    }).$mount();

    vm.$el.querySelector('.number-input__button--minus').click();
    vm.$nextTick(() => {
      expect(vm.value).to.equal(-1);
      expect(vm.$el.querySelector('.number-input__input').valueAsNumber).to.equal(-1);
      done();
    });
  });
});

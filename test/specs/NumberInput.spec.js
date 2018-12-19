describe('NumberInput', () => {
  it('should fix `0.30000000000000004` problem', (done) => {
    const vm = new Vue({
      template: '<number-input :value="0.1" :step="0.2" controls />',
    }).$mount();

    vm.$el.querySelector('.number-input__button--plus').click();
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.number-input__input').valueAsNumber).to.equal(0.3);
      done();
    });
  });

  it('should update the value when a native change was triggered', (done) => {
    const vm = new Vue({
      data() {
        return {
          value: 0,
        };
      },

      template: '<number-input v-model="value" />',
    }).$mount();
    const input = vm.$el.querySelector('.number-input__input');

    input.value = 1;
    input.dispatchEvent(new Event('change', {
      bubbles: true,
      cancelable: true,
    }));
    vm.$nextTick(() => {
      expect(vm.value).to.equal(1);
      done();
    });
  });

  it('should not update the value when paste nothing', () => {
    const vm = new Vue({
      data() {
        return {
          value: 0,
        };
      },

      template: '<number-input v-model="value" />',
    }).$mount();
    const input = vm.$el.querySelector('.number-input__input');

    input.dispatchEvent(new Event('paste', {
      bubbles: true,
      cancelable: true,
    }));
    expect(vm.value).to.equal(0);
  });
});

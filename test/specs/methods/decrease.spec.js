describe('method#decrease', () => {
  it('should decrease the number', () => {
    const vm = new Vue({
      data() {
        return {
          value: 0,
        };
      },

      template: '<number-input ref="numberInput" v-model="value" />',
    }).$mount();

    vm.$refs.numberInput.decrease();
    expect(vm.value).to.equal(-1);
  });

  it('should not decrease the number when the current value is equal to the minimum value', () => {
    const vm = new Vue({
      data() {
        return {
          value: 0,
        };
      },

      template: '<number-input ref="numberInput" v-model="value" :min="0" />',
    }).$mount();

    vm.$refs.numberInput.decrease();
    expect(vm.value).to.equal(0);
  });
});

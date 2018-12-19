describe('method#increase', () => {
  it('should increase the number', () => {
    const vm = new Vue({
      data() {
        return {
          value: 0,
        };
      },

      template: '<number-input ref="numberInput" v-model="value" />',
    }).$mount();

    vm.$refs.numberInput.increase();
    expect(vm.value).to.equal(1);
  });

  it('should not increase the number when the current value is equal to the maximum value', () => {
    const vm = new Vue({
      data() {
        return {
          value: 0,
        };
      },

      template: '<number-input ref="numberInput" v-model="value" :max="0" />',
    }).$mount();

    vm.$refs.numberInput.increase();
    expect(vm.value).to.equal(0);
  });
});

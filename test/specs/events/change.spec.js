describe('change', () => {
  it('should not trigger the `change` event by default', () => {
    new Vue({
      methods: {
        handleChange() {
          expect.fail(1, 0);
        },
      },

      template: '<number-input @change="handleChange" />',
    }).$mount();
  });

  it('should trigger the `change` event', () => {
    const vm = new Vue({
      methods: {
        handleChange(newValue, oldValue) {
          expect(newValue).to.equal(1);
          expect(oldValue).to.be.NaN;
        },
      },

      template: '<number-input ref="numberInput" @change="handleChange" controls />',
    }).$mount();

    vm.$el.querySelector('.number-input__button--plus').click();
  });
});

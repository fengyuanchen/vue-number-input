describe('prop#value', () => {
  it('should be `NaN` by default', () => {
    const vm = new Vue({
      template: '<number-input />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').valueAsNumber).to.be.NaN;
  });

  it('should be equal to the given value', () => {
    const vm = new Vue({
      template: '<number-input :value="10" />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').valueAsNumber).to.equal(10);
  });
});

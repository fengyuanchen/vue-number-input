describe('prop#max', () => {
  it('should be `Infinity` by default', () => {
    const vm = new Vue({
      template: '<number-input />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').max).to.equal('Infinity');
  });

  it('should be equal to the given value', () => {
    const vm = new Vue({
      template: '<number-input :max="10" />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').max).to.equal('10');
  });

  it('should not greater than the given maximum value', () => {
    const vm = new Vue({
      template: '<number-input :value="11" :max="10" />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').valueAsNumber).to.equal(10);
  });
});

describe('prop#step', () => {
  it('should be `1` by default', () => {
    const vm = new Vue({
      template: '<number-input controls />',
    }).$mount();

    vm.$el.querySelector('.number-input__button--plus').click();
    expect(vm.$el.querySelector('.number-input__input').step).to.equal('1');
  });

  it('should match the given value', () => {
    const vm = new Vue({
      template: '<number-input :step="2" controls />',
    }).$mount();

    vm.$el.querySelector('.number-input__button--plus').click();
    expect(vm.$el.querySelector('.number-input__input').step).to.equal('2');
  });
});

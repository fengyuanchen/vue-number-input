describe('prop#disabled', () => {
  it('should not be disabled by default', () => {
    const vm = new Vue({
      template: '<number-input controls />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').disabled).to.be.false;
    expect(vm.$el.querySelector('.number-input__button--plus').disabled).to.be.false;
    expect(vm.$el.querySelector('.number-input__button--minus').disabled).to.be.false;
  });

  it('should by disabled', () => {
    const vm = new Vue({
      template: '<number-input controls disabled />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').disabled).to.be.true;
    expect(vm.$el.querySelector('.number-input__button--plus').disabled).to.be.true;
    expect(vm.$el.querySelector('.number-input__button--minus').disabled).to.be.true;
  });
});

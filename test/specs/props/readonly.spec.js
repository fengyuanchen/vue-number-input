describe('prop#readonly', () => {
  it('should not be read-only by default', () => {
    const vm = new Vue({
      template: '<number-input controls />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').readOnly).to.be.false;
    expect(vm.$el.querySelector('.number-input__button--plus').disabled).to.be.false;
    expect(vm.$el.querySelector('.number-input__button--minus').disabled).to.be.false;
  });

  it('should be read-only', () => {
    const vm = new Vue({
      template: '<number-input controls readonly />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').readOnly).to.be.true;
    expect(vm.$el.querySelector('.number-input__button--plus').disabled).to.be.true;
    expect(vm.$el.querySelector('.number-input__button--minus').disabled).to.be.true;
  });
});

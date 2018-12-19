describe('prop#inputtable', () => {
  it('should be inputtable by default', () => {
    const vm = new Vue({
      template: '<number-input controls />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').readOnly).to.be.false;
    expect(vm.$el.querySelector('.number-input__button--plus').disabled).to.be.false;
    expect(vm.$el.querySelector('.number-input__button--minus').disabled).to.be.false;
  });

  it('should not inputtable', () => {
    const vm = new Vue({
      template: '<number-input :inputtable="false" controls />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').readOnly).to.be.true;
    expect(vm.$el.querySelector('.number-input__button--plus').disabled).to.be.false;
    expect(vm.$el.querySelector('.number-input__button--minus').disabled).to.be.false;
  });
});

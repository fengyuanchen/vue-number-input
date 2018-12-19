describe('prop#center', () => {
  it('should not be center by default', () => {
    const vm = new Vue({
      template: '<number-input />',
    }).$mount();

    expect(vm.$el.classList.contains('number-input--center')).to.be.false;
  });

  it('should be center', () => {
    const vm = new Vue({
      template: '<number-input center />',
    }).$mount();

    expect(vm.$el.classList.contains('number-input--center')).to.be.true;
  });
});

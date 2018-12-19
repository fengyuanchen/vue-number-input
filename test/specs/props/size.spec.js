describe('prop#size', () => {
  it('should be small size', () => {
    const vm = new Vue({
      template: '<number-input size="small" />',
    }).$mount();

    expect(vm.$el.classList.contains('number-input--small')).to.be.true;
  });

  it('should be large size', () => {
    const vm = new Vue({
      template: '<number-input size="large" />',
    }).$mount();

    expect(vm.$el.classList.contains('number-input--large')).to.be.true;
  });
});

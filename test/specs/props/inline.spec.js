describe('prop#inline', () => {
  it('should not be inline by default', () => {
    const vm = new Vue({
      template: '<number-input />',
    }).$mount();

    expect(vm.$el.classList.contains('number-input--inline')).to.be.false;
  });

  it('should be inline', () => {
    const vm = new Vue({
      template: '<number-input inline />',
    }).$mount();

    expect(vm.$el.classList.contains('number-input--inline')).to.be.true;
  });
});

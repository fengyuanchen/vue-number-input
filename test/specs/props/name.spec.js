describe('prop#name', () => {
  it('should be empty by default', () => {
    const vm = new Vue({
      template: '<number-input />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').name).to.be.empty;
  });

  it('should be equal to the given value', () => {
    const vm = new Vue({
      template: '<number-input name="digit" />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').name).to.equal('digit');
  });
});

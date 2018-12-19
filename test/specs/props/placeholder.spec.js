describe('prop#placeholder', () => {
  it('should be empty by default', () => {
    const vm = new Vue({
      template: '<number-input />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').placeholder).to.be.empty;
  });

  it('should be equal to the given value', () => {
    const vm = new Vue({
      template: '<number-input placeholder="Number input" />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').placeholder).to.equal('Number input');
  });
});

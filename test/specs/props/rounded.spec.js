describe('prop#rounded', () => {
  it('should not round the number by default', () => {
    const vm = new Vue({
      template: '<number-input :value="1.5" />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').valueAsNumber).to.equal(1.5);
  });

  it('should round the number', () => {
    const vm = new Vue({
      template: '<number-input :value="1.5" rounded />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').valueAsNumber).to.equal(2);
  });
});

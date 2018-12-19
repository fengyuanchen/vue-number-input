describe('prop#min', () => {
  it('should be `-Infinity` by default', () => {
    const vm = new Vue({
      template: '<number-input />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').min).to.equal('-Infinity');
  });

  it('should be equal to the given value', () => {
    const vm = new Vue({
      template: '<number-input :min="0" />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').min).to.equal('0');
  });

  it('should not less than the given minimum value', () => {
    const vm = new Vue({
      template: '<number-input :value="-1" :min="0" />',
    }).$mount();

    expect(vm.$el.querySelector('.number-input__input').valueAsNumber).to.equal(0);
  });
});

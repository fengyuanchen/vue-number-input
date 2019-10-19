describe('prop#attrs', () => {
  it('should be undefined by default', () => {
    const vm = new Vue({
      template: '<number-input ref="numberInput" />',
    }).$mount();

    expect(vm.$refs.numberInput.attrs).to.be.undefined;
  });

  it('should apply the given attributes', () => {
    const vm = new Vue({
      template: '<number-input ref="numberInput" :attrs="{ tabindex: 1 }" />',
    }).$mount();

    expect(vm.$refs.numberInput.attrs).to.be.an('object');
    expect(vm.$el.querySelector('.number-input__input').tabIndex).to.equal(1);
  });
});

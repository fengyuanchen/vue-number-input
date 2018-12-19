describe('method#setValue', () => {
  it('should change the value', (done) => {
    const vm = new Vue({
      data() {
        return {
          value: 0,
        };
      },

      template: '<number-input ref="numberInput" v-model="value" />',
    }).$mount();

    vm.$refs.numberInput.setValue(1);
    vm.$nextTick(() => {
      expect(vm.value).to.equal(1);
      expect(vm.$el.querySelector('.number-input__input').valueAsNumber).to.equal(1);
      done();
    });
  });

  it('should transform the given value when it is less than the minimum value', (done) => {
    const vm = new Vue({
      data() {
        return {
          value: 0,
        };
      },

      template: '<number-input ref="numberInput" v-model="value" :min="0" />',
    }).$mount();

    vm.$refs.numberInput.setValue(-1);
    vm.$nextTick(() => {
      expect(vm.value).to.equal(0);
      expect(vm.$el.querySelector('.number-input__input').valueAsNumber).to.equal(0);
      done();
    });
  });

  it('should transform the given value when it is greater than the maximum value', (done) => {
    const vm = new Vue({
      data() {
        return {
          value: 0,
        };
      },

      template: '<number-input ref="numberInput" v-model="value" :max="0" />',
    }).$mount();

    vm.$refs.numberInput.setValue(1);
    vm.$nextTick(() => {
      expect(vm.value).to.equal(0);
      expect(vm.$el.querySelector('.number-input__input').valueAsNumber).to.equal(0);
      done();
    });
  });

  it('should not transform the given value when the maximum value is less than the minimum value', (done) => {
    const vm = new Vue({
      data() {
        return {
          value: 0,
        };
      },

      template: '<number-input ref="numberInput" v-model="value" :min="10" :max="-10" />',
    }).$mount();

    vm.$refs.numberInput.setValue(1);
    vm.$nextTick(() => {
      expect(vm.value).to.equal(1);
      expect(vm.$el.querySelector('.number-input__input').valueAsNumber).to.equal(1);
      done();
    });
  });
});

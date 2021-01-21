import { mount } from '@vue/test-utils';
import VueNumberInput from '../src';

describe('others', () => {
  it('should fix the `0.30000000000000004` problem', (done) => {
    const wrapper = mount({
      components: {
        VueNumberInput,
      },
      data() {
        return {
          value: 0.1,
        };
      },
      template: '<vue-number-input v-model="value" :step="0.2" controls />',
    });

    expect(wrapper.vm.value).toBe(0.1);
    wrapper.get('.vue-number-input__button--plus').trigger('click').then(() => {
      expect(wrapper.vm.value).toBe(0.3);
      done();
    });
  });

  it('should update the model value when value changed', (done) => {
    const wrapper = mount({
      components: {
        VueNumberInput,
      },
      data() {
        return {
          value: 0,
        };
      },
      template: '<vue-number-input v-model="value" />',
    });

    expect(wrapper.vm.value).toBe(0);
    wrapper.get('.vue-number-input__input').setValue(1).then(() => {
      expect(wrapper.vm.value).toBe(1);
      done();
    });
  });

  it('should not update the value when paste nothing', (done) => {
    const wrapper = mount({
      components: {
        VueNumberInput,
      },
      data() {
        return {
          value: 0,
        };
      },
      template: '<vue-number-input v-model="value" />',
    });

    expect(wrapper.vm.value).toBe(0);
    wrapper.get('.vue-number-input__input').trigger('paste').then(() => {
      expect(wrapper.vm.value).toBe(0);
      done();
    });
  });
});

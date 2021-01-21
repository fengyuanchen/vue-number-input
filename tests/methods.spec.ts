import { mount } from '@vue/test-utils';
import VueNumberInput from '../src';

describe('methods', () => {
  describe('increase', () => {
    it('should increase the number', () => {
      const wrapper = mount(VueNumberInput);

      expect(wrapper.vm.value).toBeNaN();
      wrapper.vm.increase();
      expect(wrapper.vm.value).toBe(1);
    });

    it('should not increase the number when the current value is equal to the maximum value', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          max: 0,
          modelValue: 0,
        },
      });

      expect(wrapper.vm.value).toBe(0);
      wrapper.vm.increase();
      expect(wrapper.vm.value).toBe(0);
    });
  });

  describe('decrease', () => {
    it('should decrease the number', () => {
      const wrapper = mount(VueNumberInput);

      expect(wrapper.vm.value).toBeNaN();
      wrapper.vm.decrease();
      expect(wrapper.vm.value).toBe(-1);
    });

    it('should not decrease the number when the current value is equal to the maximum value', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          min: 0,
          modelValue: 0,
        },
      });

      expect(wrapper.vm.value).toBe(0);
      wrapper.vm.decrease();
      expect(wrapper.vm.value).toBe(0);
    });
  });

  describe('setValue', () => {
    it('should change the value', () => {
      const wrapper = mount(VueNumberInput);

      expect(wrapper.vm.value).toBeNaN();
      wrapper.vm.setValue(1);
      expect(wrapper.vm.value).toBe(1);
    });

    it('should transform the given value when it is less than the minimum value', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          min: 0,
        },
      });

      expect(wrapper.vm.value).toBeNaN();
      wrapper.vm.setValue(-1);
      expect(wrapper.vm.value).toBe(0);
    });

    it('should transform the given value when it is greater than the maximum value', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          max: 0,
        },
      });

      expect(wrapper.vm.value).toBeNaN();
      wrapper.vm.setValue(1);
      expect(wrapper.vm.value).toBe(0);
    });

    it('should not transform the given value when the maximum value is less than the minimum value', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          max: -10,
          min: 10,
        },
      });

      expect(wrapper.vm.value).toBeNaN();
      wrapper.vm.setValue(1);
      expect(wrapper.vm.value).toBe(1);
    });
  });
});

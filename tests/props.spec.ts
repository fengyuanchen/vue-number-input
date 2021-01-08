import { mount } from '@vue/test-utils';
import VueNumberInput from '../src';

describe('props', () => {
  describe('attrs', () => {
    it('should be undefined by default', () => {
      const wrapper = mount(VueNumberInput);

      expect(wrapper.props('attrs')).toBeUndefined();
    });

    it('should apply the given attributes', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          attrs: {
            tabindex: 0,
          },
        },
      });

      expect(wrapper.props('attrs')).toEqual({
        tabindex: 0,
      });
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).tabIndex).toBe(0);
    });
  });

  describe('center', () => {
    it('should not be center by default', () => {
      const wrapper = mount(VueNumberInput);

      expect(wrapper.props('center')).toBe(false);
      expect(wrapper.classes()).not.toContain('vue-number-input--center');
    });

    it('should be center', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          center: true,
        },
      });

      expect(wrapper.props('center')).toBe(true);
      expect(wrapper.classes()).toContain('vue-number-input--center');
    });
  });

  describe('controls', () => {
    it('should not display the controls by default', () => {
      const wrapper = mount(VueNumberInput);

      expect(wrapper.props('controls')).toBe(false);
      expect(wrapper.classes()).not.toContain('vue-number-input--controls');
      expect(wrapper.find('.vue-number-input__button').exists()).toBe(false);
    });

    it('should display the controls', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          controls: true,
        },
      });

      expect(wrapper.props('controls')).toBe(true);
      expect(wrapper.classes()).toContain('vue-number-input--controls');
      expect(wrapper.findAll('.vue-number-input__button').length).toBe(2);
    });

    it('should increase the number when click the plus control', (done) => {
      const wrapper = mount(VueNumberInput, {
        props: {
          controls: true,
        },
      });

      expect(wrapper.vm.value).toBeNaN();
      wrapper.get('.vue-number-input__button--plus').trigger('click').then(() => {
        expect(wrapper.vm.value).toBe(1);
        expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).value).toBe('1');
        done();
      });
    });

    it('should decrease the number when click the minus control', (done) => {
      const wrapper = mount(VueNumberInput, {
        props: {
          controls: true,
        },
      });

      expect(wrapper.vm.value).toBeNaN();
      wrapper.get('.vue-number-input__button--minus').trigger('click').then(() => {
        expect(wrapper.vm.value).toBe(-1);
        expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).value).toBe('-1');
        done();
      });
    });
  });

  describe('disabled', () => {
    it('should not be disabled by default', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          controls: true,
        },
      });

      expect(wrapper.props('disabled')).toBe(false);
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).disabled).toBe(false);
      expect((wrapper.get('.vue-number-input__button--plus').element as HTMLButtonElement).disabled).toBe(false);
      expect((wrapper.get('.vue-number-input__button--minus').element as HTMLButtonElement).disabled).toBe(false);
    });

    it('should by disabled', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          controls: true,
          disabled: true,
        },
      });

      expect(wrapper.props('disabled')).toBe(true);
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).disabled).toBe(true);
      expect((wrapper.get('.vue-number-input__button--plus').element as HTMLButtonElement).disabled).toBe(true);
      expect((wrapper.get('.vue-number-input__button--minus').element as HTMLButtonElement).disabled).toBe(true);
    });
  });

  describe('inline', () => {
    it('should not be inline by default', () => {
      const wrapper = mount(VueNumberInput);

      expect(wrapper.props('inline')).toBe(false);
      expect(wrapper.classes()).not.toContain('vue-number-input--inline');
    });

    it('should be inline', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          inline: true,
        },
      });

      expect(wrapper.props('inline')).toBe(true);
      expect(wrapper.classes()).toContain('vue-number-input--inline');
    });
  });

  describe('inputtable', () => {
    it('should be inputtable by default', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          controls: true,
        },
      });

      expect(wrapper.props('inputtable')).toBe(true);
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).readOnly).toBe(false);
      expect((wrapper.get('.vue-number-input__button--plus').element as HTMLButtonElement).disabled).toBe(false);
      expect((wrapper.get('.vue-number-input__button--minus').element as HTMLButtonElement).disabled).toBe(false);
    });

    it('should not be inputtable', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          controls: true,
          inputtable: false,
        },
      });

      expect(wrapper.props('inputtable')).toBe(false);
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).readOnly).toBe(true);
      expect((wrapper.get('.vue-number-input__button--plus').element as HTMLButtonElement).disabled).toBe(false);
      expect((wrapper.get('.vue-number-input__button--minus').element as HTMLButtonElement).disabled).toBe(false);
    });
  });

  describe('max', () => {
    it('should be `Infinity` by default', () => {
      const wrapper = mount(VueNumberInput);

      expect(wrapper.props('max')).toBe(Infinity);
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).max).toBe('Infinity');
    });

    it('should be equal to the given value', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          max: 10,
        },
      });

      expect(wrapper.props('max')).toBe(10);
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).max).toBe('10');
    });

    it('should not be greater than the given maximum value', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          modelValue: 11,
          max: 10,
        },
      });

      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).value).toBe('10');
    });

    it('should fix the out of range value', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          max: 10,
        },
      });

      wrapper.get('.vue-number-input__input').setValue('11').then(() => {
        expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).value).toBe('10');
      });
    });
  });

  describe('min', () => {
    it('should be `-Infinity` by default', () => {
      const wrapper = mount(VueNumberInput);

      expect(wrapper.props('min')).toBe(-Infinity);
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).min).toBe('-Infinity');
    });

    it('should be equal to the given value', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          min: -10,
        },
      });

      expect(wrapper.props('min')).toBe(-10);
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).min).toBe('-10');
    });

    it('should not be less than the given minimum value', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          modelValue: -11,
          min: -10,
        },
      });

      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).value).toBe('-10');
    });

    it('should fix the out of range value', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          min: -10,
        },
      });

      wrapper.get('.vue-number-input__input').setValue('-11').then(() => {
        expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).value).toBe('-10');
      });
    });
  });

  describe('name', () => {
    it('should be undefined by default', () => {
      const wrapper = mount(VueNumberInput);

      expect(wrapper.props('name')).toBeUndefined();
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).name).toBe('');
    });

    it('should be equal to the given value', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          name: 'digit',
        },
      });

      expect(wrapper.props('name')).toBe('digit');
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).name).toBe('digit');
    });
  });

  describe('placeholder', () => {
    it('should be undefined by default', () => {
      const wrapper = mount(VueNumberInput);

      expect(wrapper.props('placeholder')).toBeUndefined();
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).placeholder).toBe('');
    });

    it('should be equal to the given value', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          placeholder: 'Number input',
        },
      });

      expect(wrapper.props('placeholder')).toBe('Number input');
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).placeholder).toBe('Number input');
    });
  });

  describe('readonly', () => {
    it('should not be read-only by default', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          controls: true,
        },
      });

      expect(wrapper.props('readonly')).toBe(false);
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).readOnly).toBe(false);
      expect((wrapper.get('.vue-number-input__button--plus').element as HTMLButtonElement).disabled).toBe(false);
      expect((wrapper.get('.vue-number-input__button--minus').element as HTMLButtonElement).disabled).toBe(false);
    });

    it('should be read-only', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          controls: true,
          readonly: true,
        },
      });

      expect(wrapper.props('readonly')).toBe(true);
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).readOnly).toBe(true);
      expect((wrapper.get('.vue-number-input__button--plus').element as HTMLButtonElement).disabled).toBe(true);
      expect((wrapper.get('.vue-number-input__button--minus').element as HTMLButtonElement).disabled).toBe(true);
    });
  });

  describe('rounded', () => {
    it('should not round the number by default', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          modelValue: 1.5,
        },
      });

      expect(wrapper.props('rounded')).toBe(false);
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).value).toBe('1.5');
    });

    it('should round the number', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          modelValue: 1.5,
          rounded: true,
        },
      });

      expect(wrapper.props('rounded')).toBe(true);
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).value).toBe('2');
    });
  });

  describe('size', () => {
    it('should be small size', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          size: 'small',
        },
      });

      expect(wrapper.props('size')).toBe('small');
      expect(wrapper.classes()).toContain('vue-number-input--small');
    });

    it('should be large size', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          size: 'large',
        },
      });

      expect(wrapper.props('size')).toBe('large');
      expect(wrapper.classes()).toContain('vue-number-input--large');
    });
  });

  describe('step', () => {
    it('should be `1` by default', (done) => {
      const wrapper = mount(VueNumberInput, {
        props: {
          controls: true,
        },
      });

      expect(wrapper.props('step')).toBe(1);
      wrapper.get('.vue-number-input__button--plus').trigger('click').then(() => {
        expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).step).toBe('1');
        done();
      });
    });

    it('should match the given value', (done) => {
      const wrapper = mount(VueNumberInput, {
        props: {
          controls: true,
          step: 2,
        },
      });

      expect(wrapper.props('step')).toBe(2);
      wrapper.get('.vue-number-input__button--plus').trigger('click').then(() => {
        expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).step).toBe('2');
        done();
      });
    });
  });

  describe('modelValue', () => {
    it('should be `NaN` by default', () => {
      const wrapper = mount(VueNumberInput);

      expect(wrapper.props('modelValue')).toBeNaN();
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).value).toBe('');
    });

    it('should be equal to the given value', () => {
      const wrapper = mount(VueNumberInput, {
        props: {
          modelValue: 10,
        },
      });

      expect(wrapper.props('modelValue')).toBe(10);
      expect((wrapper.get('.vue-number-input__input').element as HTMLInputElement).value).toBe('10');
    });
  });
});

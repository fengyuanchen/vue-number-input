import { mount } from '@vue/test-utils';
import VueNumberInput from '../src';

describe('events', () => {
  describe('custom', () => {
    it('should trigger the custom `update:model-value` event', (done) => {
      const wrapper = mount({
        components: {
          VueNumberInput,
        },
        methods: {
          onModelValueChange(newValue: number, oldValue: number) {
            expect(newValue).toBe(1);
            expect(oldValue).toBeNaN();
            done();
          },
        },
        template: '<vue-number-input @update:model-value="onModelValueChange" />',
      });

      wrapper.get('.vue-number-input__input').setValue('1');
    });
  });

  describe('native', () => {
    it('should trigger the native `change` event', (done) => {
      const wrapper = mount({
        components: {
          VueNumberInput,
        },
        methods: {
          onChange(event: Event) {
            expect(event.type).toBe('change');
            expect((event.target as HTMLInputElement).value).toBe('1');
            done();
          },
        },
        template: '<vue-number-input @change="onChange" />',
      });

      wrapper.get('.vue-number-input__input').setValue('1');
    });

    it('should trigger the native `input` event', (done) => {
      const wrapper = mount({
        components: {
          VueNumberInput,
        },
        methods: {
          onInput(event: Event) {
            expect(event.type).toBe('input');
            expect((event.target as HTMLInputElement).value).toBe('1');
            done();
          },
        },
        template: '<vue-number-input @input="onInput" />',
      });

      wrapper.get('.vue-number-input__input').setValue('1');
    });
  });
});

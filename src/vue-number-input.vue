<template>
  <div
    class="vue-number-input"
    :class="{
      'vue-number-input--inline': inline,
      'vue-number-input--center': center,
      'vue-number-input--controls': controls,
      [`vue-number-input--${size}`]: size,
    }"
  >
    <button
      v-if="controls"
      class="vue-number-input__button vue-number-input__button--minus"
      type="button"
      tabindex="-1"
      :disabled="disabled || readonly || !decreasable"
      @click.prevent="decrease"
    />
    <input
      ref="input"
      class="vue-number-input__input"
      v-bind="attrs"
      type="number"
      :name="name"
      :value="isNaN(value) ? '' : value"
      :min="min"
      :max="max"
      :step="step"
      :readonly="readonly || !inputtable"
      :disabled="disabled || (!decreasable && !increasable)"
      :placeholder="placeholder"
      autocomplete="off"
      @change="change"
      @paste="paste"
    >
    <button
      v-if="controls"
      class="vue-number-input__button vue-number-input__button--plus"
      type="button"
      tabindex="-1"
      :disabled="disabled || readonly || !increasable"
      @click.prevent="increase"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const isNaN = Number.isNaN || window.isNaN;
const REGEXP_NUMBER = /^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/;
const REGEXP_DECIMALS = /\.\d*(?:0|9){10}\d*$/;
const normalizeDecimalNumber = (value: number, times = 100000000000) => (
  REGEXP_DECIMALS.test(String(value)) ? (Math.round(value * times) / times) : value
);

export default defineComponent({
  name: 'VueNumberInput',

  props: {
    attrs: {
      type: Object,
      default: undefined,
    },

    center: Boolean,
    controls: Boolean,
    disabled: Boolean,

    inputtable: {
      type: Boolean,
      default: true,
    },

    inline: Boolean,

    max: {
      type: Number,
      default: Infinity,
    },

    min: {
      type: Number,
      default: -Infinity,
    },

    name: {
      type: String,
      default: undefined,
    },

    placeholder: {
      type: String,
      default: undefined,
    },

    readonly: Boolean,
    rounded: Boolean,

    size: {
      type: String,
      default: undefined,
    },

    step: {
      type: Number,
      default: 1,
    },

    modelValue: {
      type: Number,
      default: NaN,
    },
  },

  emits: [
    'update:modelValue',
  ],

  data() {
    return {
      value: NaN,
    };
  },

  computed: {
    /**
     * Indicate if the value is increasable.
     * @returns {boolean} Return `true` if it is decreasable, else `false`.
     */
    increasable(): boolean {
      return isNaN(this.value) || this.value < this.max;
    },

    /**
     * Indicate if the value is decreasable.
     * @returns {boolean} Return `true` if it is decreasable, else `false`.
     */
    decreasable(): boolean {
      return isNaN(this.value) || this.value > this.min;
    },
  },

  watch: {
    modelValue: {
      immediate: true,
      handler(newValue, oldValue) {
        if (
          // Avoid triggering change event when created
          !(isNaN(newValue) && typeof oldValue === 'undefined')

          // Avoid infinite loop
          && newValue !== this.value
        ) {
          this.setValue(newValue);
        }
      },
    },
  },

  methods: {
    isNaN,

    /**
     * Change event handler.
     * @param {string} value - The new value.
     */
    change(event: any) {
      this.setValue(event.target.value);
    },

    /**
     * Paste event handler.
     * @param {Event} event - Event object.
     */
    paste(event: ClipboardEvent) {
      const clipboardData = event.clipboardData || (window as any).clipboardData;

      if (clipboardData && !REGEXP_NUMBER.test(clipboardData.getData('text'))) {
        event.preventDefault();
      }
    },

    /**
     * Decrease the value.
     */
    decrease() {
      if (this.decreasable) {
        let { value } = this;

        if (isNaN(value)) {
          value = 0;
        }

        this.setValue(normalizeDecimalNumber(value - this.step));
      }
    },

    /**
     * Increase the value.
     */
    increase() {
      if (this.increasable) {
        let { value } = this;

        if (isNaN(value)) {
          value = 0;
        }

        this.setValue(normalizeDecimalNumber(value + this.step));
      }
    },

    /**
     * Set new value and dispatch change event.
     * @param {number} value - The new value to set.
     */
    setValue(value: number) {
      const oldValue = this.value;
      let newValue = typeof value !== 'number' ? parseFloat(value) : value;

      if (!isNaN(newValue)) {
        if (this.min <= this.max) {
          newValue = Math.min(this.max, Math.max(this.min, newValue));
        }

        if (this.rounded) {
          newValue = Math.round(newValue);
        }
      }

      this.value = newValue;

      if (newValue === oldValue) {
        // Force to override the number in the input box (#13).
        (this.$refs.input as HTMLInputElement).value = String(newValue);
      }

      this.$emit('update:modelValue', newValue, oldValue);
    },
  },
});
</script>

<style lang="scss" scoped>
.vue-number-input {
  display: block;
  font-size: 0;
  max-width: 100%;
  overflow: hidden;
  position: relative;

  &__button {
    background-color: #fff;
    border: 0;
    border-radius: 0.25rem;
    bottom: 1px;
    position: absolute;
    top: 1px;
    width: 2.5rem;
    z-index: 1;

    &:focus {
      outline: none;
    }

    &:hover {
      &::before,
      &::after {
        background-color: #0074d9;
      }
    }

    &:disabled {
      opacity: 0.65;

      &::before,
      &::after {
        background-color: #ddd;
      }
    }

    &::before,
    &::after {
      background-color: #111;
      content: "";
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: background-color 0.15s;
    }

    &::before {
      height: 1px;
      width: 50%;
    }

    &::after {
      height: 50%;
      width: 1px;
    }

    &--minus {
      border-bottom-right-radius: 0;
      border-right: 1px solid #ddd;
      border-top-right-radius: 0;
      left: 1px;

      &::after {
        visibility: hidden;
      }
    }

    &--plus {
      border-bottom-left-radius: 0;
      border-left: 1px solid #ddd;
      border-top-left-radius: 0;
      right: 1px;
    }
  }

  &__input {
    -moz-appearance: textfield;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    display: block;
    font-size: 1rem;
    line-height: 1.5;
    max-width: 100%;
    min-height: 1.5rem;
    min-width: 3rem;
    padding: 0.4375rem 0.875rem;
    transition: border-color 0.15s;
    width: 100%;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &:focus {
      border-color: #0074d9;
      outline: none;
    }

    &:disabled,
    &[readonly] {
      background-color: #f8f8f8;
    }
  }

  &--inline {
    display: inline-block;

    & > input {
      display: inline-block;
      width: 12.5rem;
    }
  }

  &--center {
    & > input {
      text-align: center;
    }
  }

  &--controls {
    & > input {
      padding-left: 3.375rem;
      padding-right: 3.375rem;
    }
  }

  &--small {
    & > input {
      border-radius: 0.1875rem;
      font-size: 0.875rem;
      padding: 0.25rem 0.5rem;
    }

    &.vue-number-input--inline > input {
      width: 10rem;
    }

    &.vue-number-input--controls > button {
      width: 2rem;
    }

    &.vue-number-input--controls > input {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }

  &--large {
    & > input {
      border-radius: 0.3125rem;
      font-size: 1.25rem;
      padding: 0.5rem 1rem;
    }

    &.vue-number-input--inline > input {
      width: 15rem;
    }

    &.vue-number-input--controls > button {
      width: 3rem;
    }

    &.vue-number-input--controls > input {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
}
</style>

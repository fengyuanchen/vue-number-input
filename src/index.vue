<template>
  <div class="vue-number-input" :class="{
    'vue-number-input--inline': inline,
    'vue-number-input--center': center,
    'vue-number-input--controls': controls,
    [`vue-number-input--${size}`]: size,
  }" v-on="listeners">
    <button v-if="controls" class="vue-number-input__button vue-number-input__button--minus" type="button" @click="decrease" :disabled="disabled || readonly || !decreasable"></button>
    <input class="vue-number-input__input" ref="input" type="number" :name="name" :value="currentValue" :min="min" :max="max" :step="step" @change="change" @paste="paste" :readonly="readonly" :disabled="disabled || (!decreasable && !increasable)">
    <button v-if="controls" class="vue-number-input__button vue-number-input__button--plus" type="button" @click="increase" :disabled="disabled || readonly || !increasable"></button>
  </div>
</template>

<script>
  const isNaN = Number.isNaN || window.isNaN;
  const REGEXP_NUMBER = /^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/;

  export default {
    name: 'number-input',

    data() {
      return {
        currentValue: NaN,
      };
    },

    model: {
      event: 'change',
    },

    props: {
      center: Boolean,
      controls: Boolean,
      disabled: Boolean,
      inline: Boolean,

      max: {
        type: Number,
        default: Infinity,
      },

      min: {
        type: Number,
        default: -Infinity,
      },

      name: String,
      readonly: Boolean,
      size: String,

      step: {
        type: Number,
        default: 1,
      },

      value: Number,
    },

    computed: {
      /**
       * Indicate if the value is increasable.
       * @returns {boolean} Return `true` if it is decreasable, else `false`.
       */
      increasable() {
        const num = this.currentValue;

        return isNaN(num) || num < this.max;
      },

      /**
       * Indicate if the value is decreasable.
       * @returns {boolean} Return `true` if it is decreasable, else `false`.
       */
      decreasable() {
        const num = this.currentValue;

        return isNaN(num) || num > this.min;
      },

      /**
       * Filter listeners
       * @returns {Object} Return filtered listeners.
       */
      listeners() {
        const listeners = { ...this.$listeners };

        delete listeners.change;

        return listeners;
      },
    },

    created() {
      if (this.min <= this.max) {
        this.currentValue = Math.min(this.max, Math.max(this.min, this.value));
      }
    },

    methods: {
      /**
       * Change event handler.
       * @param {string} value - The new value.
       */
      change(event) {
        this.setValue(Math.min(this.max, Math.max(this.min, event.target.value)));
      },

      /**
       * Paste event handler.
       * @param {Event} event - Event object.
       */
      paste(event) {
        if (!REGEXP_NUMBER.test(event.clipboardData.getData('text'))) {
          event.preventDefault();
        }
      },

      /**
       * Decrease the value.
       */
      decrease() {
        if (this.decreasable) {
          let { currentValue } = this;

          if (isNaN(currentValue)) {
            currentValue = 0;
          }

          this.setValue(Math.min(this.max, Math.max(this.min, currentValue - this.step)));
        }
      },

      /**
       * Increase the value.
       */
      increase() {
        if (this.increasable) {
          let { currentValue } = this;

          if (isNaN(currentValue)) {
            currentValue = 0;
          }

          this.setValue(Math.min(this.max, Math.max(this.min, currentValue + this.step)));
        }
      },

      /**
       * Set new value and dispatch change event.
       * @param {number} newValue - The new value to set.
       */
      setValue(newValue) {
        const oldValue = this.currentValue;

        this.currentValue = newValue;
        this.$emit('change', newValue, oldValue);
        this.$nextTick(() => {
          this.$refs.input.value = newValue;
        });
      },
    },
  };
</script>

<style scoped>
  @block vue-number-input {
    display: block;
    max-width: 100%;
    overflow: hidden;
    position: relative;

    @element button {
      background-color: transparent;
      border: 0;
      border-radius: .25rem;
      bottom: .0625rem;
      position: absolute;
      top: .0625rem;
      width: 2.5rem;

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
        transition: background-color .15s;
      }

      &::before {
        height: .0625rem;
        width: 50%;
      }

      &::after {
        height: 50%;
        width: .0625rem;
      }

      @modifier minus {
        border-right: .0625rem solid #ddd;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        left: .0625rem;

        &::after {
          visibility: hidden;
        }
      }

      @modifier plus {
        border-left: .0625rem solid #ddd;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        right: .0625rem;
      }
    }

    @element input {
      border-radius: .25rem;
      border: 1px solid #ddd;
      display: block;
      font-size: 1rem;
      line-height: 1.5;
      max-width: 100%;
      min-height: 1.5rem;
      min-width: 3rem;
      padding: .4375rem .875rem;
      transition: border-color .15s;
      width: 100%;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        appearance: none;
      }

      &:focus {
        border-color: #0074d9;
        outline: none;
      }

      &[readonly] {
        background-color: #f8f8f8;
      }

      &:disabled {
        background-color: #f8f8f8;
        opacity: .65;
      }
    }

    @modifier inline {
      display: inline-block;

      & > input {
        display: inline-block;
        width: 12.5rem;
      }
    }

    @modifier center {
      & > input {
        text-align: center;
      }
    }

    @modifier controls {
      & > input {
        padding-left: 3.375rem;
        padding-right: 3.375rem;
      }
    }

    @modifier small {
      & > input {
        border-radius: .1875rem;
        font-size: .875rem;
        padding: .25rem .5rem;
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

    @modifier large {
      & > input {
        border-radius: .3125rem;
        font-size: 1.25rem;
        padding: .5rem 1rem;
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

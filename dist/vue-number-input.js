/*!
 * vue-number-input v2.0.0-alpha
 * https://fengyuanchen.github.io/vue-number-input
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-12-18T12:23:25.086Z
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.VueNumberInput = factory(global.Vue));
}(this, (function (vue) { 'use strict';

  var isNaN = Number.isNaN || window.isNaN;
  var REGEXP_NUMBER = /^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/;
  var REGEXP_DECIMALS = /\.\d*(?:0|9){10}\d*$/;

  var normalizeDecimalNumber = function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  };

  var script = {
    name: 'VueNumberInput',
    props: {
      attrs: {
        type: Object,
        default: undefined
      },
      center: Boolean,
      controls: Boolean,
      disabled: Boolean,
      inputtable: {
        type: Boolean,
        default: true
      },
      inline: Boolean,
      max: {
        type: Number,
        default: Infinity
      },
      min: {
        type: Number,
        default: -Infinity
      },
      name: {
        type: String,
        default: undefined
      },
      placeholder: {
        type: String,
        default: undefined
      },
      readonly: Boolean,
      rounded: Boolean,
      size: {
        type: String,
        default: undefined
      },
      step: {
        type: Number,
        default: 1
      },
      modelValue: {
        type: Number,
        default: NaN
      }
    },
    emit: ['update:modelValue'],
    data: function data() {
      return {
        value: NaN
      };
    },
    computed: {
      /**
       * Indicate if the value is increasable.
       * @returns {boolean} Return `true` if it is decreasable, else `false`.
       */
      increasable: function increasable() {
        return isNaN(this.value) || this.value < this.max;
      },

      /**
       * Indicate if the value is decreasable.
       * @returns {boolean} Return `true` if it is decreasable, else `false`.
       */
      decreasable: function decreasable() {
        return isNaN(this.value) || this.value > this.min;
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler: function handler(newValue, oldValue) {
          if ( // Avoid triggering change event when created
          !(isNaN(newValue) && typeof oldValue === 'undefined') // Avoid infinite loop
          && newValue !== this.value) {
            this.setValue(newValue);
          }
        }
      }
    },
    methods: {
      /**
       * Change event handler.
       * @param {string} value - The new value.
       */
      change: function change(event) {
        this.setValue(event.target.value);
      },

      /**
       * Paste event handler.
       * @param {Event} event - Event object.
       */
      paste: function paste(event) {
        var clipboardData = event.clipboardData || window.clipboardData;

        if (clipboardData && !REGEXP_NUMBER.test(clipboardData.getData('text'))) {
          event.preventDefault();
        }
      },

      /**
       * Decrease the value.
       */
      decrease: function decrease() {
        if (this.decreasable) {
          var value = this.value;

          if (isNaN(value)) {
            value = 0;
          }

          this.setValue(normalizeDecimalNumber(value - this.step));
        }
      },

      /**
       * Increase the value.
       */
      increase: function increase() {
        if (this.increasable) {
          var value = this.value;

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
      setValue: function setValue(value) {
        var oldValue = this.value;
        var newValue = this.rounded ? Math.round(value) : Number(value);

        if (this.min <= this.max) {
          newValue = Math.min(this.max, Math.max(this.min, newValue));
        }

        this.value = newValue;

        if (newValue === oldValue) {
          // Force to override the number in the input box (#13).
          this.$refs.input.value = newValue;
        }

        this.$emit('update:modelValue', newValue, oldValue);
      }
    }
  };

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var _withId = /*#__PURE__*/vue.withScopeId("data-v-fc1b9a54");

  var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", {
      class: ["vue-number-input", _defineProperty({
        'vue-number-input--inline': $props.inline,
        'vue-number-input--center': $props.center,
        'vue-number-input--controls': $props.controls
      }, "vue-number-input--".concat($props.size), $props.size)]
    }, [$props.controls ? (vue.openBlock(), vue.createBlock("button", {
      key: 0,
      class: "vue-number-input__button vue-number-input__button--minus",
      type: "button",
      tabindex: "-1",
      disabled: $props.disabled || $props.readonly || !$options.decreasable,
      onClick: _cache[1] || (_cache[1] = function () {
        return $options.decrease && $options.decrease.apply($options, arguments);
      })
    }, null, 8
    /* PROPS */
    , ["disabled"])) : vue.createCommentVNode("v-if", true), vue.createVNode("input", vue.mergeProps({
      ref: "input",
      class: "vue-number-input__input"
    }, $props.attrs, {
      type: "number",
      name: $props.name,
      value: $data.value,
      min: $props.min,
      max: $props.max,
      step: $props.step,
      readonly: $props.readonly || !$props.inputtable,
      disabled: $props.disabled || !$options.decreasable && !$options.increasable,
      placeholder: $props.placeholder,
      autocomplete: "off",
      onChange: _cache[2] || (_cache[2] = function () {
        return $options.change && $options.change.apply($options, arguments);
      }),
      onPaste: _cache[3] || (_cache[3] = function () {
        return $options.paste && $options.paste.apply($options, arguments);
      })
    }), null, 16
    /* FULL_PROPS */
    , ["name", "value", "min", "max", "step", "readonly", "disabled", "placeholder"]), $props.controls ? (vue.openBlock(), vue.createBlock("button", {
      key: 1,
      class: "vue-number-input__button vue-number-input__button--plus",
      type: "button",
      tabindex: "-1",
      disabled: $props.disabled || $props.readonly || !$options.increasable,
      onClick: _cache[4] || (_cache[4] = function () {
        return $options.increase && $options.increase.apply($options, arguments);
      })
    }, null, 8
    /* PROPS */
    , ["disabled"])) : vue.createCommentVNode("v-if", true)], 2
    /* CLASS */
    );
  });

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".vue-number-input[data-v-fc1b9a54]{display:block;font-size:0;max-width:100%;overflow:hidden;position:relative}.vue-number-input__button[data-v-fc1b9a54]{background-color:#fff;border:0;border-radius:.25rem;bottom:1px;position:absolute;top:1px;width:2.5rem;z-index:1}.vue-number-input__button[data-v-fc1b9a54]:focus{outline:none}.vue-number-input__button[data-v-fc1b9a54]:hover:after,.vue-number-input__button[data-v-fc1b9a54]:hover:before{background-color:#0074d9}.vue-number-input__button[data-v-fc1b9a54]:disabled{opacity:.65}.vue-number-input__button[data-v-fc1b9a54]:disabled:after,.vue-number-input__button[data-v-fc1b9a54]:disabled:before{background-color:#ddd}.vue-number-input__button[data-v-fc1b9a54]:after,.vue-number-input__button[data-v-fc1b9a54]:before{background-color:#111;content:\"\";left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);transition:background-color .15s}.vue-number-input__button[data-v-fc1b9a54]:before{height:1px;width:50%}.vue-number-input__button[data-v-fc1b9a54]:after{height:50%;width:1px}.vue-number-input__button--minus[data-v-fc1b9a54]{border-bottom-right-radius:0;border-right:1px solid #ddd;border-top-right-radius:0;left:1px}.vue-number-input__button--minus[data-v-fc1b9a54]:after{visibility:hidden}.vue-number-input__button--plus[data-v-fc1b9a54]{border-bottom-left-radius:0;border-left:1px solid #ddd;border-top-left-radius:0;right:1px}.vue-number-input__input[data-v-fc1b9a54]{-moz-appearance:textfield;background-color:#fff;border:1px solid #ddd;border-radius:.25rem;display:block;font-size:1rem;line-height:1.5;max-width:100%;min-height:1.5rem;min-width:3rem;padding:.4375rem .875rem;transition:border-color .15s;width:100%}.vue-number-input__input[data-v-fc1b9a54]::-webkit-inner-spin-button,.vue-number-input__input[data-v-fc1b9a54]::-webkit-outer-spin-button{-webkit-appearance:none}.vue-number-input__input[data-v-fc1b9a54]:focus{border-color:#0074d9;outline:none}.vue-number-input__input[data-v-fc1b9a54]:disabled,.vue-number-input__input[readonly][data-v-fc1b9a54]{background-color:#f8f8f8}.vue-number-input--inline[data-v-fc1b9a54]{display:inline-block}.vue-number-input--inline>input[data-v-fc1b9a54]{display:inline-block;width:12.5rem}.vue-number-input--center>input[data-v-fc1b9a54]{text-align:center}.vue-number-input--controls>input[data-v-fc1b9a54]{padding-left:3.375rem;padding-right:3.375rem}.vue-number-input--small>input[data-v-fc1b9a54]{border-radius:.1875rem;font-size:.875rem;padding:.25rem .5rem}.vue-number-input--small.vue-number-input--inline>input[data-v-fc1b9a54]{width:10rem}.vue-number-input--small.vue-number-input--controls>button[data-v-fc1b9a54]{width:2rem}.vue-number-input--small.vue-number-input--controls>input[data-v-fc1b9a54]{padding-left:2.5rem;padding-right:2.5rem}.vue-number-input--large>input[data-v-fc1b9a54]{border-radius:.3125rem;font-size:1.25rem;padding:.5rem 1rem}.vue-number-input--large.vue-number-input--inline>input[data-v-fc1b9a54]{width:15rem}.vue-number-input--large.vue-number-input--controls>button[data-v-fc1b9a54]{width:3rem}.vue-number-input--large.vue-number-input--controls>input[data-v-fc1b9a54]{padding-left:4rem;padding-right:4rem}";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-fc1b9a54";

  script.install = function (app) {
    app.component(script.name, script);
  };

  return script;

})));

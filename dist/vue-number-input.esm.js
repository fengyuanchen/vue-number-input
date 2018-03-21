/*!
 * vue-number-input v0.2.0
 * https://github.com/fengyuanchen/vue-number-input
 *
 * Copyright (c) 2018 Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-03-21T13:52:27.466Z
 */

var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".vue-number-input[data-v-1a4d8e3c] { display: block; max-width: 100%; overflow: hidden; position: relative; } .vue-number-input__button[data-v-1a4d8e3c] { background-color: transparent; border: 0; border-radius: .25rem; bottom: 1px; bottom: .0625rem; position: absolute; top: 1px; top: .0625rem; width: 40px; width: 2.5rem; .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]:focus { outline: none; } } .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]:focus, .vue-number-input__button[data-v-1a4d8e3c]:focus { outline: none; } .vue-number-input__button[data-v-1a4d8e3c] { .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]:hover::before, .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]:hover::after { background-color: #0074d9; } } .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]:hover::before, .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]:hover::after { background-color: #0074d9; } .vue-number-input__button[data-v-1a4d8e3c]:hover { .vue-number-input__button:hover .vue-number-input__button[data-v-1a4d8e3c]:hover::before, .vue-number-input__button:hover .vue-number-input__button[data-v-1a4d8e3c]:hover::after { background-color: #0074d9; } } .vue-number-input__button:hover .vue-number-input__button[data-v-1a4d8e3c]:hover::before, .vue-number-input__button:hover .vue-number-input__button[data-v-1a4d8e3c]:hover::after, .vue-number-input__button[data-v-1a4d8e3c]:hover::before, .vue-number-input__button[data-v-1a4d8e3c]:hover::after { background-color: #0074d9; } .vue-number-input__button[data-v-1a4d8e3c] { .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]:disabled::before, .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]:disabled::after { background-color: #ddd; } } .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]:disabled::before, .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]:disabled::after { background-color: #ddd; } .vue-number-input__button[data-v-1a4d8e3c]:disabled { .vue-number-input__button:disabled .vue-number-input__button[data-v-1a4d8e3c]:disabled::before, .vue-number-input__button:disabled .vue-number-input__button[data-v-1a4d8e3c]:disabled::after { background-color: #ddd; } } .vue-number-input__button:disabled .vue-number-input__button[data-v-1a4d8e3c]:disabled::before, .vue-number-input__button:disabled .vue-number-input__button[data-v-1a4d8e3c]:disabled::after, .vue-number-input__button[data-v-1a4d8e3c]:disabled::before, .vue-number-input__button[data-v-1a4d8e3c]:disabled::after { background-color: #ddd; } .vue-number-input__button[data-v-1a4d8e3c] { .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]::before, .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]::after { background-color: #111; content: \"\"; left: 50%; position: absolute; top: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); -webkit-transition: background-color .15s; transition: background-color .15s; } } .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]::before, .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]::after, .vue-number-input__button[data-v-1a4d8e3c]::before, .vue-number-input__button[data-v-1a4d8e3c]::after { background-color: #111; content: \"\"; left: 50%; position: absolute; top: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); -webkit-transition: background-color .15s; transition: background-color .15s; } .vue-number-input__button[data-v-1a4d8e3c] { .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]::before { height: 1px; height: .0625rem; width: 50%; } } .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]::before, .vue-number-input__button[data-v-1a4d8e3c]::before { height: 1px; height: .0625rem; width: 50%; } .vue-number-input__button[data-v-1a4d8e3c] { .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]::after { height: 50%; width: 1px; width: .0625rem; } } .vue-number-input__button .vue-number-input__button[data-v-1a4d8e3c]::after, .vue-number-input__button[data-v-1a4d8e3c]::after { height: 50%; width: 1px; width: .0625rem; } .vue-number-input__button--minus[data-v-1a4d8e3c] { border-right: 1px solid #ddd; border-right: .0625rem solid #ddd; border-bottom-right-radius: 0; border-top-right-radius: 0; left: 1px; left: .0625rem; .vue-number-input__button--minus .vue-number-input__button--minus[data-v-1a4d8e3c]::after { visibility: hidden; } } .vue-number-input__button--minus .vue-number-input__button--minus[data-v-1a4d8e3c]::after, .vue-number-input__button--minus[data-v-1a4d8e3c]::after { visibility: hidden; } .vue-number-input__button--plus[data-v-1a4d8e3c] { border-left: 1px solid #ddd; border-left: .0625rem solid #ddd; border-bottom-left-radius: 0; border-top-left-radius: 0; right: 1px; right: .0625rem; } .vue-number-input__input[data-v-1a4d8e3c] { border-radius: .25rem; border: 1px solid #ddd; display: block; font-size: 16px; font-size: 1rem; line-height: 1.5; max-width: 100%; min-height: 24px; min-height: 1.5rem; min-width: 48px; min-width: 3rem; padding: 7px 14px; padding: .4375rem .875rem; -webkit-transition: border-color .15s; transition: border-color .15s; width: 100%; .vue-number-input__input .vue-number-input__input[data-v-1a4d8e3c]::-webkit-outer-spin-button, .vue-number-input__input .vue-number-input__input[data-v-1a4d8e3c]::-webkit-inner-spin-button { -webkit-appearance: none; appearance: none; } } .vue-number-input__input .vue-number-input__input[data-v-1a4d8e3c]::-webkit-outer-spin-button, .vue-number-input__input .vue-number-input__input[data-v-1a4d8e3c]::-webkit-inner-spin-button, .vue-number-input__input[data-v-1a4d8e3c]::-webkit-outer-spin-button, .vue-number-input__input[data-v-1a4d8e3c]::-webkit-inner-spin-button { -webkit-appearance: none; appearance: none; } .vue-number-input__input[data-v-1a4d8e3c] { .vue-number-input__input .vue-number-input__input[data-v-1a4d8e3c]:focus { border-color: #0074d9; outline: none; } } .vue-number-input__input .vue-number-input__input[data-v-1a4d8e3c]:focus, .vue-number-input__input[data-v-1a4d8e3c]:focus { border-color: #0074d9; outline: none; } .vue-number-input__input[data-v-1a4d8e3c] { .vue-number-input__input .vue-number-input__input[readonly][data-v-1a4d8e3c] { background-color: #f8f8f8; } } .vue-number-input__input .vue-number-input__input[readonly][data-v-1a4d8e3c], .vue-number-input__input[readonly][data-v-1a4d8e3c] { background-color: #f8f8f8; } .vue-number-input__input[data-v-1a4d8e3c] { .vue-number-input__input .vue-number-input__input[data-v-1a4d8e3c]:disabled { background-color: #f8f8f8; opacity: .65; } } .vue-number-input__input .vue-number-input__input[data-v-1a4d8e3c]:disabled, .vue-number-input__input[data-v-1a4d8e3c]:disabled { background-color: #f8f8f8; opacity: .65; } .vue-number-input--inline[data-v-1a4d8e3c] { display: inline-block; .vue-number-input--inline .vue-number-input--inline > input[data-v-1a4d8e3c] { display: inline-block; width: 200px; width: 12.5rem; } } .vue-number-input--inline .vue-number-input--inline > input[data-v-1a4d8e3c], .vue-number-input--inline > input[data-v-1a4d8e3c] { display: inline-block; width: 200px; width: 12.5rem; } .vue-number-input--center[data-v-1a4d8e3c] { .vue-number-input--center .vue-number-input--center > input[data-v-1a4d8e3c] { text-align: center; } } .vue-number-input--center .vue-number-input--center > input[data-v-1a4d8e3c], .vue-number-input--center > input[data-v-1a4d8e3c] { text-align: center; } .vue-number-input--controls[data-v-1a4d8e3c] { .vue-number-input--controls .vue-number-input--controls > input[data-v-1a4d8e3c] { padding-left: 54px; padding-left: 3.375rem; padding-right: 54px; padding-right: 3.375rem; } } .vue-number-input--controls .vue-number-input--controls > input[data-v-1a4d8e3c], .vue-number-input--controls > input[data-v-1a4d8e3c] { padding-left: 54px; padding-left: 3.375rem; padding-right: 54px; padding-right: 3.375rem; } .vue-number-input--small[data-v-1a4d8e3c] { .vue-number-input--small .vue-number-input--small > input[data-v-1a4d8e3c] { border-radius: .1875rem; font-size: 14px; font-size: .875rem; padding: 4px 8px; padding: .25rem .5rem; } } .vue-number-input--small .vue-number-input--small > input[data-v-1a4d8e3c], .vue-number-input--small > input[data-v-1a4d8e3c] { border-radius: .1875rem; font-size: 14px; font-size: .875rem; padding: 4px 8px; padding: .25rem .5rem; } .vue-number-input--small[data-v-1a4d8e3c] { .vue-number-input--small .vue-number-input--small.vue-number-input--inline > input[data-v-1a4d8e3c] { width: 160px; width: 10rem; } } .vue-number-input--small .vue-number-input--small.vue-number-input--inline > input[data-v-1a4d8e3c], .vue-number-input--small.vue-number-input--inline > input[data-v-1a4d8e3c] { width: 160px; width: 10rem; } .vue-number-input--small[data-v-1a4d8e3c] { .vue-number-input--small .vue-number-input--small.vue-number-input--controls > button[data-v-1a4d8e3c] { width: 32px; width: 2rem; } } .vue-number-input--small .vue-number-input--small.vue-number-input--controls > button[data-v-1a4d8e3c], .vue-number-input--small.vue-number-input--controls > button[data-v-1a4d8e3c] { width: 32px; width: 2rem; } .vue-number-input--small[data-v-1a4d8e3c] { .vue-number-input--small .vue-number-input--small.vue-number-input--controls > input[data-v-1a4d8e3c] { padding-left: 40px; padding-left: 2.5rem; padding-right: 40px; padding-right: 2.5rem; } } .vue-number-input--small .vue-number-input--small.vue-number-input--controls > input[data-v-1a4d8e3c], .vue-number-input--small.vue-number-input--controls > input[data-v-1a4d8e3c] { padding-left: 40px; padding-left: 2.5rem; padding-right: 40px; padding-right: 2.5rem; } .vue-number-input--large[data-v-1a4d8e3c] { .vue-number-input--large .vue-number-input--large > input[data-v-1a4d8e3c] { border-radius: .3125rem; font-size: 20px; font-size: 1.25rem; padding: 8px 16px; padding: .5rem 1rem; } } .vue-number-input--large .vue-number-input--large > input[data-v-1a4d8e3c], .vue-number-input--large > input[data-v-1a4d8e3c] { border-radius: .3125rem; font-size: 20px; font-size: 1.25rem; padding: 8px 16px; padding: .5rem 1rem; } .vue-number-input--large[data-v-1a4d8e3c] { .vue-number-input--large .vue-number-input--large.vue-number-input--inline > input[data-v-1a4d8e3c] { width: 240px; width: 15rem; } } .vue-number-input--large .vue-number-input--large.vue-number-input--inline > input[data-v-1a4d8e3c], .vue-number-input--large.vue-number-input--inline > input[data-v-1a4d8e3c] { width: 240px; width: 15rem; } .vue-number-input--large[data-v-1a4d8e3c] { .vue-number-input--large .vue-number-input--large.vue-number-input--controls > button[data-v-1a4d8e3c] { width: 48px; width: 3rem; } } .vue-number-input--large .vue-number-input--large.vue-number-input--controls > button[data-v-1a4d8e3c], .vue-number-input--large.vue-number-input--controls > button[data-v-1a4d8e3c] { width: 48px; width: 3rem; } .vue-number-input--large[data-v-1a4d8e3c] { .vue-number-input--large .vue-number-input--large.vue-number-input--controls > input[data-v-1a4d8e3c] { padding-left: 64px; padding-left: 4rem; padding-right: 64px; padding-right: 4rem; } } .vue-number-input--large .vue-number-input--large.vue-number-input--controls > input[data-v-1a4d8e3c], .vue-number-input--large.vue-number-input--controls > input[data-v-1a4d8e3c] { padding-left: 64px; padding-left: 4rem; padding-right: 64px; padding-right: 4rem; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var isNaN = Number.isNaN || window.isNaN;
var REGEXP_NUMBER = /^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/;

var index = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', _vm._g({ staticClass: "vue-number-input", class: defineProperty({ 'vue-number-input--inline': _vm.inline, 'vue-number-input--center': _vm.center, 'vue-number-input--controls': _vm.controls }, 'vue-number-input--' + _vm.size, _vm.size) }, _vm.listeners), [_vm.controls ? _c('button', { staticClass: "vue-number-input__button vue-number-input__button--minus", attrs: { "type": "button", "disabled": _vm.disabled || _vm.readonly || !_vm.decreasable }, on: { "click": _vm.decrease } }) : _vm._e(), _vm._v(" "), _c('input', { ref: "input", staticClass: "vue-number-input__input", attrs: { "type": "number", "name": _vm.name, "min": _vm.min, "max": _vm.max, "step": _vm.step, "readonly": _vm.readonly, "disabled": _vm.disabled || !_vm.decreasable && !_vm.increasable }, domProps: { "value": _vm.currentValue }, on: { "change": _vm.change, "paste": _vm.paste } }), _vm._v(" "), _vm.controls ? _c('button', { staticClass: "vue-number-input__button vue-number-input__button--plus", attrs: { "type": "button", "disabled": _vm.disabled || _vm.readonly || !_vm.increasable }, on: { "click": _vm.increase } }) : _vm._e()]);
  }, staticRenderFns: [], _scopeId: 'data-v-1a4d8e3c',
  name: 'number-input',

  data: function data() {
    return {
      currentValue: NaN
    };
  },


  model: {
    event: 'change'
  },

  props: {
    center: Boolean,
    controls: Boolean,
    disabled: Boolean,
    inline: Boolean,

    max: {
      type: Number,
      default: Infinity
    },

    min: {
      type: Number,
      default: -Infinity
    },

    name: String,
    readonly: Boolean,
    size: String,

    step: {
      type: Number,
      default: 1
    },

    value: Number
  },

  computed: {
    /**
     * Indicate if the value is increasable.
     * @returns {boolean} Return `true` if it is decreasable, else `false`.
     */
    increasable: function increasable() {
      var num = this.currentValue;

      return isNaN(num) || num < this.max;
    },


    /**
     * Indicate if the value is decreasable.
     * @returns {boolean} Return `true` if it is decreasable, else `false`.
     */
    decreasable: function decreasable() {
      var num = this.currentValue;

      return isNaN(num) || num > this.min;
    },


    /**
     * Filter listeners
     * @returns {Object} Return filtered listeners.
     */
    listeners: function listeners() {
      var listeners = _extends({}, this.$listeners);

      delete listeners.change;

      return listeners;
    }
  },

  created: function created() {
    if (this.min <= this.max) {
      this.currentValue = Math.min(this.max, Math.max(this.min, this.value));
    }
  },


  methods: {
    /**
     * Change event handler.
     * @param {string} value - The new value.
     */
    change: function change(event) {
      this.setValue(Math.min(this.max, Math.max(this.min, event.target.value)));
    },


    /**
     * Paste event handler.
     * @param {Event} event - Event object.
     */
    paste: function paste(event) {
      if (!REGEXP_NUMBER.test(event.clipboardData.getData('text'))) {
        event.preventDefault();
      }
    },


    /**
     * Decrease the value.
     */
    decrease: function decrease() {
      if (this.decreasable) {
        var currentValue = this.currentValue;


        if (isNaN(currentValue)) {
          currentValue = 0;
        }

        this.setValue(Math.min(this.max, Math.max(this.min, currentValue - this.step)));
      }
    },


    /**
     * Increase the value.
     */
    increase: function increase() {
      if (this.increasable) {
        var currentValue = this.currentValue;


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
    setValue: function setValue(newValue) {
      var _this = this;

      var oldValue = this.currentValue;

      this.currentValue = newValue;
      this.$emit('change', newValue, oldValue);
      this.$nextTick(function () {
        _this.$refs.input.value = newValue;
      });
    }
  }
};

export default index;

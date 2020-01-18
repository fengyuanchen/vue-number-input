/*!
 * vue-number-input v1.2.1
 * https://fengyuanchen.github.io/vue-number-input
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-01-18T05:53:39.315Z
 */

'use strict';

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var isNaN = Number.isNaN || window.isNaN;
var REGEXP_NUMBER = /^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/;
var REGEXP_DECIMALS = /\.\d*(?:0|9){10}\d*$/;

var normalizeDecimalNumber = function normalizeDecimalNumber(value) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
  return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
};

var script = {
  name: 'NumberInput',
  model: {
    event: 'change'
  },
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
    value: {
      type: Number,
      default: NaN
    }
  },
  data: function data() {
    return {
      currentValue: NaN
    };
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
      var listeners = _objectSpread2({}, this.$listeners);

      delete listeners.change;
      return listeners;
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(newValue, oldValue) {
        if ( // Avoid triggering change event when created
        !(isNaN(newValue) && typeof oldValue === 'undefined') // Avoid infinite loop
        && newValue !== this.currentValue) {
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
      this.setValue(Math.min(this.max, Math.max(this.min, event.target.value)));
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
        var currentValue = this.currentValue;

        if (isNaN(currentValue)) {
          currentValue = 0;
        }

        this.setValue(Math.min(this.max, Math.max(this.min, normalizeDecimalNumber(currentValue - this.step))));
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

        this.setValue(Math.min(this.max, Math.max(this.min, normalizeDecimalNumber(currentValue + this.step))));
      }
    },

    /**
     * Set new value and dispatch change event.
     * @param {number} value - The new value to set.
     */
    setValue: function setValue(value) {
      var oldValue = this.currentValue;
      var newValue = this.rounded ? Math.round(value) : value;

      if (this.min <= this.max) {
        newValue = Math.min(this.max, Math.max(this.min, newValue));
      }

      this.currentValue = newValue;

      if (newValue === oldValue) {
        // Force to override the number in the input box (#13).
        this.$refs.input.value = newValue;
      }

      this.$emit('change', newValue, oldValue);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}

var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', _vm._g({
    staticClass: "number-input",
    class: (_obj = {
      'number-input--inline': _vm.inline,
      'number-input--center': _vm.center,
      'number-input--controls': _vm.controls
    }, _obj["number-input--" + _vm.size] = _vm.size, _obj)
  }, _vm.listeners), [_vm.controls ? _c('button', {
    staticClass: "number-input__button number-input__button--minus",
    attrs: {
      "type": "button",
      "tabindex": "-1",
      "disabled": _vm.disabled || _vm.readonly || !_vm.decreasable
    },
    on: {
      "click": _vm.decrease
    }
  }) : _vm._e(), _vm._v(" "), _c('input', _vm._b({
    ref: "input",
    staticClass: "number-input__input",
    attrs: {
      "type": "number",
      "name": _vm.name,
      "min": _vm.min,
      "max": _vm.max,
      "step": _vm.step,
      "readonly": _vm.readonly || !_vm.inputtable,
      "disabled": _vm.disabled || !_vm.decreasable && !_vm.increasable,
      "placeholder": _vm.placeholder,
      "autocomplete": "off"
    },
    domProps: {
      "value": _vm.currentValue
    },
    on: {
      "change": _vm.change,
      "paste": _vm.paste
    }
  }, 'input', _vm.attrs, false)), _vm._v(" "), _vm.controls ? _c('button', {
    staticClass: "number-input__button number-input__button--plus",
    attrs: {
      "type": "button",
      "tabindex": "-1",
      "disabled": _vm.disabled || _vm.readonly || !_vm.increasable
    },
    on: {
      "click": _vm.increase
    }
  }) : _vm._e()]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-3580ff4f_0", {
    source: ".number-input[data-v-3580ff4f]{display:block;font-size:0;max-width:100%;overflow:hidden;position:relative}.number-input__button[data-v-3580ff4f]{background-color:#fff;border:0;border-radius:.25rem;bottom:1px;position:absolute;top:1px;width:2.5rem;z-index:1}.number-input__button[data-v-3580ff4f]:focus{outline:0}.number-input__button[data-v-3580ff4f]:hover::after,.number-input__button[data-v-3580ff4f]:hover::before{background-color:#0074d9}.number-input__button[data-v-3580ff4f]:disabled{opacity:.65}.number-input__button[data-v-3580ff4f]:disabled::after,.number-input__button[data-v-3580ff4f]:disabled::before{background-color:#ddd}.number-input__button[data-v-3580ff4f]::after,.number-input__button[data-v-3580ff4f]::before{background-color:#111;content:\"\";left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);transition:background-color .15s}.number-input__button[data-v-3580ff4f]::before{height:1px;width:50%}.number-input__button[data-v-3580ff4f]::after{height:50%;width:1px}.number-input__button--minus[data-v-3580ff4f]{border-bottom-right-radius:0;border-right:1px solid #ddd;border-top-right-radius:0;left:1px}.number-input__button--minus[data-v-3580ff4f]::after{visibility:hidden}.number-input__button--plus[data-v-3580ff4f]{border-bottom-left-radius:0;border-left:1px solid #ddd;border-top-left-radius:0;right:1px}.number-input__input[data-v-3580ff4f]{-moz-appearance:textfield;background-color:#fff;border:1px solid #ddd;border-radius:.25rem;display:block;font-size:1rem;line-height:1.5;max-width:100%;min-height:1.5rem;min-width:3rem;padding:.4375rem .875rem;transition:border-color .15s;width:100%}.number-input__input[data-v-3580ff4f]::-webkit-inner-spin-button,.number-input__input[data-v-3580ff4f]::-webkit-outer-spin-button{-webkit-appearance:none}.number-input__input[data-v-3580ff4f]:focus{border-color:#0074d9;outline:0}.number-input__input[data-v-3580ff4f]:disabled,.number-input__input[readonly][data-v-3580ff4f]{background-color:#f8f8f8}.number-input--inline[data-v-3580ff4f]{display:inline-block}.number-input--inline>input[data-v-3580ff4f]{display:inline-block;width:12.5rem}.number-input--center>input[data-v-3580ff4f]{text-align:center}.number-input--controls>input[data-v-3580ff4f]{padding-left:3.375rem;padding-right:3.375rem}.number-input--small>input[data-v-3580ff4f]{border-radius:.1875rem;font-size:.875rem;padding:.25rem .5rem}.number-input--small.number-input--inline>input[data-v-3580ff4f]{width:10rem}.number-input--small.number-input--controls>button[data-v-3580ff4f]{width:2rem}.number-input--small.number-input--controls>input[data-v-3580ff4f]{padding-left:2.5rem;padding-right:2.5rem}.number-input--large>input[data-v-3580ff4f]{border-radius:.3125rem;font-size:1.25rem;padding:.5rem 1rem}.number-input--large.number-input--inline>input[data-v-3580ff4f]{width:15rem}.number-input--large.number-input--controls>button[data-v-3580ff4f]{width:3rem}.number-input--large.number-input--controls>input[data-v-3580ff4f]{padding-left:4rem;padding-right:4rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-3580ff4f";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

__vue_component__.install = function (Vue) {
  Vue.component(__vue_component__.name, __vue_component__);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(__vue_component__);
}

module.exports = __vue_component__;

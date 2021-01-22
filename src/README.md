# Number Input

> Number input with optional controls.

## Basic usage

```html
<template>
  <p>Value: {{ value }}</p>
  <vue-number-input v-model="value" :min="1" :max="10" inline controls></vue-number-input>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
    };
  },
};
</script>
```

## Step

```html
<template>
  <vue-number-input :step="10" inline controls></vue-number-input>
</template>
```

## Inline

```html
<template>
  <p>
    <vue-number-input placeholder="Block input (default)" controls></vue-number-input>
  </p>
  <vue-number-input placeholder="Inline input" inline controls></vue-number-input>
</template>
```

## Center number

```html
<template>
  <vue-number-input :model-value="0" inline center controls></vue-number-input>
</template>
```

## Sizes

```html
<template>
  <vue-number-input placeholder="Small" size="small" inline controls></vue-number-input>
  <vue-number-input placeholder="Default" inline controls></vue-number-input>
  <vue-number-input placeholder="Large" size="large" inline controls></vue-number-input>
</template>

<style scoped>
.vue-number-input + .vue-number-input {
  margin-left: 1rem;
}
</style>
```

## Without controls

```html
<template>
  <vue-number-input placeholder="Small number input" size="small" inline></vue-number-input>
  <vue-number-input placeholder="Default number input" inline></vue-number-input>
  <vue-number-input placeholder="Large number input" size="large" inline></vue-number-input>
</template>

<style scoped>
.vue-number-input + .vue-number-input {
  margin-left: 1rem;
}
</style>
```

## Rounded

```html
<template>
  <vue-number-input :model-value="1.5" inline controls rounded></vue-number-input>
</template>
```

## Not inputtable

The input is not inputtable, but still allow to change the value by controls.

```html
<template>
  <vue-number-input :model-value="1" :min="1" :max="3" :inputtable="false" inline controls></vue-number-input>
</template>
```

## Readonly

```html
<template>
  <vue-number-input :model-value="1" inline controls readonly></vue-number-input>
</template>
```

## Disabled

```html
<template>
  <vue-number-input :model-value="0" inline controls disabled></vue-number-input>
</template>
```

## Customize attributes for the input element

```html
<template>
  <vue-number-input :model-value="0" :attrs="{ id: 'my-vue-number-input', tabindex: -1 }" inline controls></vue-number-input>
</template>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| attrs | `Object` | - | - | Specify attributes for the built-in input element. |
| center | `boolean` | `false` | - | Indicate if the number is center or not. |
| controls | `boolean` | `false` | - | Indicate if the controls is visible or not. |
| disabled | `boolean` | `false` | - | Indicate if the component is disabled or not. |
| inline | `boolean` | `false` | - | Indicate if the input is inline or not. |
| inputtable | `boolean` | `true` | - | Indicate if the input element is inputtable or not. |
| max | `number` | `Infinity` | - | The maximum value. |
| min | `number` | `-Infinity` | - | The minimum value. |
| name | `string` | - | - | The name of the input element. |
| placeholder | `string` | - | - | The placeholder of the input element. |
| readonly | `boolean` | `false` | - | Indicate if the component is read only or not. |
| rounded | `boolean` | `false` | - | Indicate if the number is rounded or not. |
| size | `string` | - | small, large | The size of the component. |
| step | `number` | `1` | - | The increment of each step. |
| modelValue | `number` | - | - | The binding value. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:model-value | `(newValue, oldValue)` | Fire when the value is changed. |

> Native events that bubble up from child elements are also available.

```html
<template>
  <vue-number-input @update:model-value="onUpdate" @change="onChange" @input="onInput" inline controls></vue-number-input>
</template>

<script>
export default {
  methods: {
    onUpdate(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
    onChange(event) {
      console.log(event);
    },
    onInput(event) {
      console.log(event);
    },
  },
};
</script>
```

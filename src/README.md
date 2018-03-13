# Number Input

> Number input with optional controls.

## Basic usage

```html
<template>
  <div>
    <p>Value: {{ value }}</p>
    <vue-number-input v-model="value" :min="1" :max="10" inline controls></vue-number-input>
  </div>
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
  <div>
    <p>
      <vue-number-input placeholder="Block input (default)" controls></vue-number-input>
    </p>
    <vue-number-input placeholder="Inline input" inline controls></vue-number-input>
  </div>
</template>
```

## Center number

```html
<template>
  <vue-number-input :value="0" inline center controls></vue-number-input>
</template>
```

## Sizes

```html
<template>
  <div>
    <vue-number-input placeholder="Small" size="small" inline controls></vue-number-input>
    <vue-number-input placeholder="Default" inline controls></vue-number-input>
    <vue-number-input placeholder="Large" size="large" inline controls></vue-number-input>
  </div>
</template>
```

## Without controls

```html
<template>
  <div>
    <vue-number-input placeholder="Small number input" size="small" inline></vue-number-input>
    <vue-number-input placeholder="Default number input" inline></vue-number-input>
    <vue-number-input placeholder="Large number input" size="large" inline></vue-number-input>
  </div>
</template>
```

## Readonly

```html
<template>
  <vue-number-input :value="1" inline controls readonly></vue-number-input>
</template>
```

## Disabled

```html
<template>
  <vue-number-input :value="0" inline controls disabled></vue-number-input>
</template>
```

## Props

All native attributes of the `<input type="number">` element are supported.

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| center | `Boolean` | `false` | - | Indicate if the number is center or not. |
| controls | `Boolean` | `false` | - | Indicate if the controls is visible or not. |
| disabled | `Boolean` | `false` | - | Indicate if the component is disabled or not. |
| inline | `Boolean` | `false` | - | Indicate if the input is inline or not. |
| max | `Number` | `Infinity` | - | The maximum value. |
| min | `Number` | `-Infinity` | - | The minimum value. |
| name | `String` | - | - | The name for the built-in input element. |
| readonly | `Boolean` | `false` | - | Indicate if the component is read only or not. |
| size | `String` | - | small, large | The size of the component. |
| step | `Number` | `1` | - | The increment of each step. |
| value | `Number` | - | - | The binding value. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| change | `(newValue, oldValue)` | Fire when the value is changed. |

# Number Input

> Number input with optional controls.

## Basic usage

```html
<template>
  <div>
    <p>Value: {{ value }}</p>
    <number-input v-model="value" :min="1" :max="10" inline controls></number-input>
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
  <number-input :step="10" inline controls></number-input>
</template>
```

## Inline

```html
<template>
  <div>
    <p>
      <number-input placeholder="Block input (default)" controls></number-input>
    </p>
    <number-input placeholder="Inline input" inline controls></number-input>
  </div>
</template>
```

## Center number

```html
<template>
  <number-input :value="0" inline center controls></number-input>
</template>
```

## Sizes

```html
<template>
  <div>
    <number-input placeholder="Small" size="small" inline controls></number-input>
    <number-input placeholder="Default" inline controls></number-input>
    <number-input placeholder="Large" size="large" inline controls></number-input>
  </div>
</template>
```

## Without controls

```html
<template>
  <div>
    <number-input placeholder="Small number input" size="small" inline></number-input>
    <number-input placeholder="Default number input" inline></number-input>
    <number-input placeholder="Large number input" size="large" inline></number-input>
  </div>
</template>
```

## Rounded

```html
<template>
  <number-input :value="1.5" inline controls rounded></number-input>
</template>
```

## Not inputtable

The input is not inputtable, but still allow to change the value by controls.

```html
<template>
  <number-input :value="1" :min="1" :max="3" :inputtable="false" inline controls></number-input>
</template>
```

## Readonly

```html
<template>
  <number-input :value="1" inline controls readonly></number-input>
</template>
```

## Disabled

```html
<template>
  <number-input :value="0" inline controls disabled></number-input>
</template>
```

## Customize attributes for the input element

```html
<template>
  <number-input :value="0" :attrs="{ id: 'my-number-input', tabindex: -1 }" inline controls></number-input>
</template>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| attrs | `Object` | - | - | Specify attributes for the built-in input element. |
| center | `Boolean` | `false` | - | Indicate if the number is center or not. |
| controls | `Boolean` | `false` | - | Indicate if the controls is visible or not. |
| disabled | `Boolean` | `false` | - | Indicate if the component is disabled or not. |
| inline | `Boolean` | `false` | - | Indicate if the input is inline or not. |
| inputtable | `Boolean` | `true` | - | Indicate if the input element is inputtable or not. |
| max | `Number` | `Infinity` | - | The maximum value. |
| min | `Number` | `-Infinity` | - | The minimum value. |
| name | `String` | - | - | The name of the input element. |
| placeholder | `String` | - | - | The placeholder of the input element. |
| readonly | `Boolean` | `false` | - | Indicate if the component is read only or not. |
| rounded | `Boolean` | `false` | - | Indicate if the number is rounded or not. |
| size | `String` | - | small, large | The size of the component. |
| step | `Number` | `1` | - | The increment of each step. |
| value | `Number` | - | - | The binding value. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| change | `(newValue, oldValue)` | Fire when the value is changed. |

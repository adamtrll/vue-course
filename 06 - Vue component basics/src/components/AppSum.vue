<script setup>
import { computed } from 'vue'
// const props = defineProps(['numbers'])

// https://vuejs.org/guide/components/props
// https://vuejs.org/guide/components/props#prop-passing-details
// props can be defined as an object to define requirements for the props
const props = defineProps({
    numbers: {
        // required: true, means that the prop is required and must be passed to the component
        // required: true,
        // for type property all JavaScript primitive types are supported: String, number, boolean, Array, Object
        type: Array,
        // default: means that the prop is optional and will be set to the default value if not passed
        // for number, boolean and string the default value can be defined as a value like:
        // default: 0,
        // for Array and Object the default value must be defined as a function that returns the default value
        default: () => [],
        // validator: can be used to validate the prop value
        validator(value) {
            const isValid =
                Array.isArray(value) &&
                value.every((num) => typeof num === 'number')

            if (!isValid)
                console.warn(
                    '[AppSum] "numbers" must be an array of numbers',
                    value
                )

            return isValid
        },
        // example validator when the prop must be from a fixed set of values
        // validator(value) {
        //     return ['success', 'warning', 'error'].includes(value)
        // },
    },
})

// computed property based on the prop value
const sum = computed(() =>
    props.numbers.reduce((lastSum, number) => lastSum + number, 0)
)
</script>

<template>
    <p>
        {{ sum }}
    </p>
</template>

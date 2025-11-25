<script setup>
import { computed } from 'vue'
// const props = defineProps(['numbers'])

const props = defineProps({
    numbers: {
        // required: true,
        type: Array,
        // type: String, number, boolean, Array, Object
        default() {
            return []
        },
        validator(value) {
            return value.every((num) => typeof num === 'number')
        },

        // validator(value) {
        //     return ['success', 'warning', 'error'].includes(value)
        // },
    },
})

const sum = computed(() =>
    props.numbers.reduce((lastSum, number) => lastSum + number, 0)
)
</script>

<template>
    <p>
        {{ sum }}
    </p>
</template>

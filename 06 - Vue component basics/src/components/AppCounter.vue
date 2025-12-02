<script setup>
import { ref } from 'vue'

const props = defineProps({
    numbers: {
        type: Array,
        required: true,
    },
})

const emit = defineEmits(['updated'])

// Props are read-only, so we need to create a local copy to modify the value in the component
// https://vuejs.org/guide/components/props#one-way-data-flow
const localNumbers = ref(props.numbers)

const increment = (idx) => {
    // modify the local copy of the prop value
    localNumbers.value[idx]++

    // trigger the updated event to notify the parent component about the change
    emit('updated', localNumbers.value)
}
</script>

<template>
    <ul>
        <li v-for="(number, idx) in localNumbers" :key="number">
            {{ number }} <button @click="increment(idx)">+</button>
        </li>
    </ul>
</template>

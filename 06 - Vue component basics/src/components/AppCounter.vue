<script setup>
import { ref } from 'vue'

const props = defineProps({
    numbers: {
        type: Array,
        required: true,
    },
})

const emit = defineEmits(['updated'])

const localNumbers = ref(props.numbers)

const increment = (idx) => {
    localNumbers.value[idx]++

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

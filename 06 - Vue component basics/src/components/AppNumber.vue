<script setup>
// number should be an object with a value property
const props = defineProps(['number'])

console.log('props.number')
console.log('value: ', props.number)
console.log('type: ', typeof props.number)
console.log('value property: ', props.number.value)
</script>

<template>
    <p>
        {{ number.value + 1 }}
    </p>
</template>

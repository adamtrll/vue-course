<script setup>
import { computed } from 'vue'

const props = defineProps(['task', 'users'])

const assignedTo = computed(() =>
    props.users.find((user) => user.id === props.task.assignedTo)
)
</script>

<template>
    <div>
        {{ task.title }}
        <p>{{ assignedTo?.name }} - {{ assignedTo?.email }}</p>
    </div>
</template>

<style scoped></style>

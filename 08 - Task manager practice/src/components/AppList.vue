<script setup>
import AppListItem from './AppListItem.vue'

const emit = defineEmits(['delete'])

const props = defineProps(['tasks', 'users'])

const handleDelete = (id) => {
    // forward the delete event to the parent component
    emit('delete', id)
}
</script>

<template>
    <AppListItem
        v-for="task in tasks"
        :task="task"
        :users="users"
        @delete="handleDelete"
    />
</template>

<style scoped></style>

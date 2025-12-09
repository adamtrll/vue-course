<script setup>
import AppListItem from './AppListItem.vue'

const props = defineProps(['tasks', 'users'])
</script>

<template>
    <AppListItem v-for="task in tasks" :task="task" :users="users" />
</template>

<style scoped></style>

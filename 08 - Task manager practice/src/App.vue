<script setup>
import AppForm from '@/components/AppForm.vue'
import AppList from '@/components/AppList.vue'
import { ref, onMounted } from 'vue'

let maxId = 1

const loading = ref(true)
const assignees = ref([])

const downloadAssignees = async () => {
    loading.value = true

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    assignees.value = await response.json()

    loading.value = false
}

const tasks = ref([
    {
        id: 1,
        title: 'Task 1',
        description: 'Task 1 description',
        assignedTo: 1,
    },
])

const handleCreated = (task) => {
    tasks.value.push({
        id: ++maxId,
        ...task,
    })
}

onMounted(() => {
    downloadAssignees()
})
</script>

<template>
    <AppForm
        @created="handleCreated"
        :assignees="assignees"
        :loading="loading"
    />
    <AppList v-if="!loading" :tasks="tasks" :users="assignees" />
</template>

<style scoped></style>

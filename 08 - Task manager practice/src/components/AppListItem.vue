<script setup>
import { ref, computed } from 'vue'

const props = defineProps(['task', 'users'])

const emit = defineEmits(['delete'])

const assignedTo = computed(() =>
    props.users.find((user) => user.id === props.task.assignedTo)
)

const showMore = ref(false)
const toggleShowMore = () => {
    showMore.value = !showMore.value
}

const description = computed(() => {
    if (showMore.value) {
        return props.task.description
    }

    return props.task.description.length > 30
        ? props.task.description.substring(0, 30) + '...'
        : props.task.description
})
</script>

<template>
    <div>
        {{ task.title }}
        <p>{{ assignedTo?.name }} - {{ assignedTo?.email }}</p>
        <p>{{ description }}</p>
        <div>
            <button @click.prevent="toggleShowMore">
                {{ showMore ? 'Less' : 'More' }}
            </button>
            <button @click.prevent="emit('delete', task.id)">Delete</button>
        </div>
    </div>
</template>

<style scoped></style>

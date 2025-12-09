<script setup>
import { ref } from 'vue'

const props = defineProps(['assignees', 'loading'])

const emit = defineEmits(['create'])

const form = ref({
    title: '',
    description: '',
    assignedTo: '',
})

const errors = ref({
    title: null,
    assignedTo: null,
    description: null,
})

const validate = () => {
    errors.value.title = null
    errors.value.assignedTo = null
    errors.value.description = null

    if (form.value.title.trim() === '') {
        errors.value.title = 'Title is required'
    } else if (form.value.title.length > 50) {
        errors.value.title = 'Title must be less than 50 characters'
    }

    if (form.value.assignedTo === '') {
        errors.value.assignedTo = 'Assignee is required'
    }

    if (form.value.description.trim() === '') {
        errors.value.description = 'Description is required'
    } else if (form.value.description.length < 150) {
        errors.value.description = 'Description must be at least 150 characters'
    }

    return (
        !errors.value.title &&
        !errors.value.assignedTo &&
        !errors.value.description
    )
}

const handleSubmit = () => {
    if (!validate()) {
        return
    }

    emit('create', {
        title: form.value.title,
        assignedTo: form.value.assignedTo,
        description: form.value.description,
    })

    form.value = {
        title: '',
        assignedTo: '',
        description: '',
    }
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div :class="{ 'is-invalid': errors.title }">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="form.title" />
            <p v-if="errors.title">{{ errors.title }}</p>
        </div>
        <div v-if="loading">Loading assignees...</div>
        <div v-else :class="{ 'is-invalid': errors.assignedTo }">
            <label for="assignedTo">Assigned to</label>
            <select id="assignedTo" v-model="form.assignedTo">
                <option value="">Select an assignee</option>
                <option
                    v-for="assignee in assignees"
                    :value="assignee.id"
                    :key="assignee.id"
                >
                    {{ assignee.name }}
                </option>
            </select>
            <p v-if="errors.assignedTo">{{ errors.assignedTo }}</p>
        </div>
        <div :class="{ 'is-invalid': errors.description }">
            <label for="description">Description</label>
            <textarea id="description" v-model="form.description"></textarea>
            <p v-if="errors.description">{{ errors.description }}</p>
        </div>
        <button type="submit" :disabled="loading">Create Task</button>
        <pre>{{ form }}</pre>
    </form>
</template>

<style scoped>
.is-invalid {
    color: red;
}

.is-invalid p {
    font-size: 0.8rem;
}

.is-invalid input,
.is-invalid select,
.is-invalid textarea {
    border-color: red;
    color: red;
}
</style>

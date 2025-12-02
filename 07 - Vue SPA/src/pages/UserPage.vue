<script setup>
import { ref, onMounted } from 'vue'

import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const user = ref(null)

const fetchUser = async () => {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${route.params.id}`
        )
        user.value = await response.json()
    } catch {
        router.push({ name: '404' })
    }
}

onMounted(() => {
    fetchUser()
})
</script>

<template>
    <h1>User Page</h1>
    <p v-if="user">{{ user.name }}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppPostItem from '@/components/AppPostItem.vue'

const loading = ref(true)
const posts = ref([])

const fetchPosts = async () => {
    loading.value = true

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    posts.value = data

    loading.value = false
}

onMounted(() => {
    fetchPosts()
})
</script>

<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else class="app-post-list">
            <app-post-item v-for="post in posts" :post="post" :key="post.id" />
        </div>
    </div>
</template>

<style scoped>
.app-post-list {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'
const authStore = useAuthStore()

const router = useRouter()

const signOut = () => {
    authStore.signOut()

    router.push({ name: 'home' })
}
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink :to="{ name: 'about' }">About</RouterLink>
            <RouterLink :to="{ name: 'account.profile' }">Profile</RouterLink>
            <template v-if="authStore.isLoggedIn">
                <a href="#" @click.prevent="signOut">Sign Out</a>
            </template>
        </nav>
    </header>
    <RouterView />
</template>

<style scoped>
nav {
    display: flex;
    gap: 1rem;
}
</style>

<script setup>
import { ref, watch } from 'vue'
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'vue-router'
const authStore = useAuthStore()

const email = ref('')
const password = ref('')

const submit = () => {
    authStore.signIn(email.value, password.value)
}

const router = useRouter()

watch(
    () => authStore.isLoggedIn,
    (newVal) => {
        if (newVal) {
            const intendedPage = authStore.popIntendedPage()
            // replacing the current route instead of pushing a new one
            router.replace(intendedPage || { name: 'home' })
        }
    },
    { immediate: true }
)
</script>

<template>
    <h2>Login</h2>
    <form @submit.prevent="submit">
        <p>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" />
        </p>
        <p>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" />
        </p>
        <p><button>Login</button></p>
    </form>
</template>

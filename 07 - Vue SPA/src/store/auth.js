import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const token = ref(null)

    const isLoggedIn = computed(() => token.value !== null)

    const intendedPage = ref(null)

    const setIntendedPage = (page) => {
        intendedPage.value = page
    }

    const popIntendedPage = () => {
        const page = intendedPage.value
        intendedPage.value = null
        return page
    }

    const signIn = (email, password) => {
        // todo: call server to get token

        token.value = '1234567890'

        // todo: fetch user profile by token and store it
    }

    const signOut = () => {
        token.value = null
    }

    return {
        isLoggedIn,

        signIn,
        signOut,

        setIntendedPage,
        popIntendedPage,
    }
})

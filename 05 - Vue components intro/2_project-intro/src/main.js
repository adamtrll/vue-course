// Main entry point for the application
// This file is responsible for creating the Vue application and mounting it to the DOM
// Import global styles and components, or register Vue plugins here

// Importing global styles
import '@/assets/app.css'

import { createApp } from 'vue'
import App from './App.vue'
import AppCard from '@/components/ui/AppCard.vue'

// Creating the Vue application
const app = createApp(App)

// Registering global ui components
app.component('ui-card', AppCard)

app.mount('#app')

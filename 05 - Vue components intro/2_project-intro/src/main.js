import '@/assets/app.css'

import { createApp } from 'vue'
import App from './App.vue'
import AppCard from '@/components/ui/AppCard.vue'

const app = createApp(App)

app.component('ui-card', AppCard)

app.mount('#app')

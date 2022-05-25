import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/styles/reset.scss'

import router from '@router/router.js'
import Vue3SmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)

app.use(router).use(Vue3SmoothScroll).mount('#app')

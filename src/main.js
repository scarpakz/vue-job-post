import { createApp } from 'vue'
import App2 from './App2.vue'
import router from './router'
import './style.css'

const app = createApp(App2)

app.use(router)

app.mount('#app')

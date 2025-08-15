import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import vuetify from './plugins/vuetify'

const app = createApp(App)
const pinia = createPinia(); // Pinia instance created
app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app')
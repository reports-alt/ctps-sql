import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import { createPinia } from 'pinia';
import vuetify from './plugins/vuetify'

const pinia = createPinia();

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app')
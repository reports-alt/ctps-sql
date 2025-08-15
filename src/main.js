import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import vuetify from './plugins/vuetify'
import { useFirebaseStore } from '/home/user/ctps-sql/src/store/firebase.js'; // Corrected path

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app')
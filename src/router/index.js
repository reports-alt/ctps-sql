import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../store/user';



const routes = [

  {
    path: '/',
    name: 'home',
    component: () => {
      const userStore = useUserStore();
      if (userStore.role === 'user') {
        return import('/src/views/site/Site.vue');
      } else if (userStore.role === 'filler') {
        return import('/src/views/filler/Filler.vue');
      }else{
        return import('/src/components/RestrictedAccess.vue');
      }



    },

  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
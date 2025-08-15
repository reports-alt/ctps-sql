import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const role = ref(null)
  const user = ref(null)

  return { role, user }
});
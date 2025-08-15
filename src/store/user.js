import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const role = ref(null);
  const user = ref(null);
  const showLoginDialog = ref(false)





  async function login(email, password) {
    console.log('Login action called with:', email, password);
  }

  async function resetPassword(email) {

    console.log('Reset Password action called with:', email);
    
  }

  async function logout(email) {
    console.log('Reset Password action called with:', email);

  }



  return { role, user, showLoginDialog, login, resetPassword, logout };
});
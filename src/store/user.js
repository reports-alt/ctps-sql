import { defineStore } from 'pinia';
import { ref } from 'vue';
import { onAuthStateChanged, signInWithEmailAndPassword,signOut } from 'firebase/auth';
import { httpsCallable } from 'firebase/functions';
import { auth, functions } from '../plugins/firebase';

export const useUserStore = defineStore('user', () => {
  const role = ref(null);
  const firebaseUser = ref(null);
  const user = ref(null);
  const showLoginDialog = ref(false)



  // Listen for authentication state changes
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      console.log( 'onAuthStateChanged', currentUser )
      firebaseUser.value = currentUser;
      getUser()
      // You might want to fetch the user's role from Firestore here
    } else {
      user.value = null;
    }
  });

  async function login(email, password) {
    try {
      signOut(auth)
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
     // firebaseUser.value = userCredential.user;
      console.log('User logged in:', userCredential);
    } catch (error) {
      console.error('Error during login:', error.message);
    }
    
  }

  async function resetPassword(email) {

    console.log('Reset Password action called with:', email);
    
  }

  async function logout() {
    console.log('Logout action called');
    // Implement Firebase logout here
  }

  async function getUser() {
    try {
      console.log('request user', firebaseUser.value)
      const apiCall = httpsCallable(functions, 'api');
      const result = await apiCall({ method: 'getUser' , uid:firebaseUser.value.uid, email: firebaseUser.value.email});
      // Handle the response from the Cloud Function
      console.log('getUser Cloud Function response:', result.data);
      return result.data;
    } catch (error) {
      console.error('Error calling getUser Cloud Function:', error);
      throw error; // Rethrow the error for handling in components
    }
  }

  return { role, user, showLoginDialog, login, resetPassword, logout, getUser };
});
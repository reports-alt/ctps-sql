import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const drawer = ref(false)

  const snackbarMessage = ref(null),
    snackbarColor = ref('error'),
    snackbarTitle = ref(null),
    snackbarVisible = ref(false);

  function showMessage(payload, color = 'error', title = null) {
    snackbarMessage.value = typeof payload === 'string' ? payload : payload.message || 'An unexpected error occurred.';
    snackbarColor.value = color;
    snackbarTitle.value = title;
    snackbarVisible.value = true;
  }

  return {
    drawer, snackbarMessage,
    snackbarColor,
    snackbarTitle,
    snackbarVisible, showMessage
  };
});
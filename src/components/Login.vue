<template>
  <v-dialog v-model="showLoginDialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>

      <v-card-text>
        <v-form ref="form" vl>
          <v-text-field v-model="email" label="Email" :hide-details="false" :rules="emailRules" />
          <v-text-field v-model="password" label="Password" :type="showPassword ? 'text' : 'password'"
            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="showPassword = !showPassword" :hide-details="false" />
        </v-form>
      </v-card-text>

      <v-card-actions>

        <v-btn text @click="showLoginDialog = false">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" @click="handleReset">Reset Password</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" variant="elevated" @click="handleLogin">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store/user';
import { useAppStore } from '../store/app';

const appStore = useAppStore()
const { showMessage } = appStore
const userStore = useUserStore()
const { login, resetPassword } = userStore
const { showLoginDialog, } = storeToRefs(userStore)

const form = ref(null)
const loading = ref(false)
const email = ref(null)
const password = ref(null)
const showPassword = ref(false)


watch(showLoginDialog, () => {
  email.value = null
  password.value = null
  showPassword.value = false
}, { immediate: true })



const emailRules = [
  v => !!v || 'E-mail is required',
  v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
]

const handleReset = () => {
  form.value.validate().then(v => {
    if (v.valid) {
      loading.value = true
      resetPassword(email.value).catch(showMessage).finally(loading.value = false)
    }
  })
}

const handleLogin = () => {
  form.value.validate().then(v => {
    if (v.valid) {
      loading.value = true
      login(email.value, password.value).catch(showMessage).finally(loading.value = false)
    }
  })

}

</script>

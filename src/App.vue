<template>
  <v-app>
    <v-layout>
      <AppBar />
      <AppDrawer />
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
    <Login />
    <v-snackbar v-model="snackbarVisible" :color="snackbarColor" :title="snackbarTitle" :text="snackbarMessage">
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbarVisible = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import AppDrawer from './components/AppDrawer.vue';
import AppBar from './components/AppBar.vue';
import Login from './components/Login.vue';

import { useAppStore } from '/src/store/app';

const appStore = useAppStore();
const { snackbarVisible, snackbarMessage, snackbarColor, snackbarTitle } = storeToRefs(appStore);


</script>

<style scoped></style>

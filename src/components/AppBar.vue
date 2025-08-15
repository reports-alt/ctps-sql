<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>PackTrackIt (SQL)</v-app-bar-title>
    u {{ user }}
    <v-spacer></v-spacer>
    <div class="pr-3">
      <v-icon v-if="!user" @click="showLoginDialog = true">mdi-login</v-icon>
      <v-icon v-else @click="userStore.logout">mdi-logout</v-icon>
    </div>
  </v-app-bar>
</template>

<script setup>

import { storeToRefs } from 'pinia';


import { useAppStore } from '/src/store/app';
import { useUserStore } from '/src/store/user';


const appStore = useAppStore();
const { drawer } = storeToRefs(appStore);
const userStore = useUserStore();
const { user, showLoginDialog } = storeToRefs(userStore);


</script>
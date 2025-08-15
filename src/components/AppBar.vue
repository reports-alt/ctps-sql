<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>PackTrackIt (SQL)</v-app-bar-title>
    <v-spacer></v-spacer>
    <div class="pr-3">
      <v-icon v-if="!user" @click="userStore.login">mdi-login</v-icon>
      <v-icon v-else @click="userStore.logout">mdi-logout</v-icon>
    </div>
  </v-app-bar>
</template>

<script setup>

import { useAppStore } from '/src/store/app';
import { useUserStore } from '/src/store/user';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { drawer } = storeToRefs(appStore);
const userStore = useUserStore();
const { user } = storeToRefs(userStore);


</script>
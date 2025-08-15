<template>
  <v-app>
    <v-layout>
      <AppBar />
      <AppDrawer />

      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>

import { useUserStore } from '/src/store/user';
import { useAppStore } from '/src/store/app';
import AppDrawer from './components/AppDrawer.vue';
import AppBar from './components/AppBar.vue';

const userStore = useUserStore();
const appStore = useAppStore();

</script>

<style scoped></style>

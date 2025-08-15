<template>
  <v-navigation-drawer v-model="drawer">

    <v-list>
      <v-list-item title="Menu Item 1"></v-list-item>
      <v-list-item title="Menu Item 2"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


<script setup>
import { storeToRefs } from 'pinia';
import { useAppStore } from '../store/app';

const appStore = useAppStore()
const { drawer } = storeToRefs(appStore)
</script>
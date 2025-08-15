<template>
    <div class="text-center">
        <h3 class="text-error">Logged out</h3>
        User:{{ user }}

    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '/src/store/user';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>
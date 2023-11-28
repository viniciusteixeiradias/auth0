<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue';
const { isAuthenticated } = useAuth0();
</script>

<template>
  <p>Authenticated: {{ isAuthenticated }}</p>
  <router-view />
</template>

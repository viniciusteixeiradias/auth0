<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect, logout: authLogout, user, isAuthenticated } = useAuth0();

const login = () => {
  loginWithRedirect();
}

const logout = () => {
  authLogout({ logoutParams: { returnTo: window.location.origin } });
}
</script>

<template>
  <div v-if="isAuthenticated">
    <h1>Profile / Auth</h1>
  </div>
  <div style="display: flex; gap: 1rem;">
    <button @click="$router.back">Back</button>
    <button @click="login">Log in</button>
    <button @click="logout">Log out</button>
  </div>
  <div>
    <pre>{{ JSON.stringify(user, null, 2) }}</pre>
  </div>
</template>

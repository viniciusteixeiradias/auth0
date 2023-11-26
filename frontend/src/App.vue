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
  <div>
    <button @click="login">Log in</button>
    <button @click="logout">Log out</button>
  </div>
  <div>
    <h2>User Profile</h2>
    <pre v-if="isAuthenticated">
        <code>{{ user }}</code>
      </pre>
  </div>
</template>

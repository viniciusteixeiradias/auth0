<script lang="ts" setup>
import { services } from '@/servies';
import { useAuth0 } from '@auth0/auth0-vue';
import { useRouter } from 'vue-router';

const { loginWithRedirect, logout: authLogout, isAuthenticated } = useAuth0();

const router = useRouter();

const goProfile = () => {
  router.push({ name: "profile" })
}

const login = () => {
  loginWithRedirect();
}

const logout = () => {
  authLogout({ logoutParams: { returnTo: window.location.origin } });
}

const createUser = async () => {
  await services.user.create();
}
</script>

<template>
  <div>
    <h1>Home / No Auth</h1>
    <div style="display: flex; gap: 1rem;">
      <button @click="login">Log in</button>
      <button @click="logout" :disabled="!isAuthenticated">Log out</button>
      <button @click="goProfile">Profile</button>

      <button @click="createUser">Call API</button>
    </div>
  </div>
</template>

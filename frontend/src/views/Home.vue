<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue';
import { useRouter } from 'vue-router';

const { loginWithRedirect, logout: authLogout, isAuthenticated, user } = useAuth0();

const router = useRouter()

const login = (): void => {
  loginWithRedirect({
    authorizationParams: {
      redirect_uri: import.meta.env.VITE_BASE_URL
    }
  });
}

const logout = (): void => {
  authLogout({ logoutParams: { returnTo: window.location.origin } });
}

const goToProject = (): void => {
  router.push({ name: "project" })
}
</script>

<template>
  <header>
    Here it's my app bar
    <button v-if="isAuthenticated" @click="logout">Logout</button>
    <button v-else @click="login">Login</button>
  </header>
  <div class="home__content">
   <div>
      Here it's my first screen without Login!
    </div>
    <div v-if="isAuthenticated">
      <div class="home__content--profile">
        <pre>{{ JSON.stringify(user, null, 2) }}</pre>
      </div>
    </div>
    <div>
      <button @click="goToProject">Project</button>
    </div>
  </div>
</template>

<style scoped>
* {
  color: white;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 1rem;
  height: 50px;
  font-size: 1.5rem;
  background-color: rgb(71, 71, 71);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

button {
  font-size: 1.3rem;
}

.home__content {
  height: 100%;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(31, 31, 31);
}

.home__content--profile {
  font-size: 1rem;
}
</style>
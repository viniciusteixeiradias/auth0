import { createApp } from 'vue'
import App from './App.vue'

import { createAuth0 } from '@auth0/auth0-vue';

import { createRouter } from './routes';

const app = createApp(App);

app.use(createRouter(app))

app.use(
  createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    authorizationParams: {
      redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL
    }
  })
);

app.mount('#app');

import { createRouter as createVueRouter, createWebHistory, Router } from "vue-router";
import { createAuthGuard } from "@auth0/auth0-vue";
import { App } from 'vue';

export function createRouter(app: App): Router {
  return createVueRouter({
    routes: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("../views/Profile.vue"),
        beforeEnter: createAuthGuard(app)
      },
      {
        path: "/callback",
        name: "callback",
        component: () => import("@/views/Callback.vue"),
        beforeEnter: createAuthGuard(app)
      }
    ],
    history: createWebHistory()
  })
}

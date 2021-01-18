import { createRouter, createWebHistory } from "vue-router";
import { Pomodoro, Settings, About, Sessions } from "./views";

const routes = [
  { path: "/", component: Pomodoro },
  { path: "/about", component: About },
  { path: "/settings", component: Settings },
  { path: "/sessions", component: Sessions },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

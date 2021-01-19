import { createRouter, createWebHistory } from "vue-router";
import { Pomodoro, Settings, About, Sessions } from "./views";

const routes = [
  { path: "/", component: Pomodoro, name: "Pomodoro" },
  { path: "/about", component: About, name: "About" },
  { path: "/settings", component: Settings, name: "Settings" },
  { path: "/sessions", component: Sessions, name: "Sessions" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

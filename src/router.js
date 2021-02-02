import { createRouter, createWebHistory } from "vue-router";
import { Pomodoro, Settings, About } from "./views";

const routes = [
  {
    path: "/",
    component: Pomodoro,
    name: "Pomodoro",
    children: [
      {
        path: "/settings",
        component: Settings,
        name: "Settings",
      },
      { path: "/about", component: About, name: "About" },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

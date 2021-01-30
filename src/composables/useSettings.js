import { reactive, watch, toRefs } from "vue";

let inititialized = false;

const localStorage = {
  get: (key) => window.localStorage.getItem(key),
  set: (key, data) => window.localStorage.setItem(key, data),
};

let state = reactive({
  sessionMinutes: 25,
  shortBreakMinutes: 5,
  longBreakMinutes: 15,
  notifications: false,
  sound: false,
  darkTheme: false,
  showInfoButton: true,
});

export default function useSettings() {
  const toggleTheme = () => {
    if (localStorage.get("theme") === "light") {
      localStorage.set("theme", "dark");
      state.darkTheme = true;
      document.querySelector("html").classList.add("dark");
    } else {
      localStorage.set("theme", "light");
      state.darkTheme = false;
      document.querySelector("html").classList.remove("dark");
    }
  };

  if (!inititialized) {
    state.darkTheme = localStorage.get("theme") === "dark";

    const savedSettings = JSON.parse(localStorage.get("settings"));
    state = savedSettings ? reactive(savedSettings) : state;

    watch(state, () => localStorage.set("settings", JSON.stringify(state)), {
      deep: true,
    });
    inititialized = true;
  }

  return { ...toRefs(state), toggleTheme };
}

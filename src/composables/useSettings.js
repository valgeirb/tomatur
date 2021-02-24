import { reactive, watch, toRefs } from "vue";
import useTheme from "./useTheme";

let initialized = false;

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
  const toggleDark = () => {
    const { currentTheme, toggleTheme } = useTheme();
    toggleTheme();
    state.darkTheme = currentTheme.value === "dark";
  };

  if (!initialized) {
    const { currentTheme } = useTheme();

    state.darkTheme = currentTheme.value === "dark";

    const savedSettings = JSON.parse(localStorage.get("settings"));
    state = savedSettings ? reactive(savedSettings) : state;

    watch(state, () => localStorage.set("settings", JSON.stringify(state)), {
      deep: true,
    });

    initialized = true;
  }

  return { ...toRefs(state), toggleDark };
}

import { reactive, watch, toRefs } from "vue";

let inititialized = false;

const localStorage = {
  get: (key) => JSON.parse(window.localStorage.getItem(key)),
  set: (key, data) => window.localStorage.setItem(key, JSON.stringify(data)),
};

let state = reactive({
  session: 25,
  shortBreak: 5,
  longBreak: 15,
  notifications: false,
  sound: false,
  darkTheme: false,
  showInfoButton: true,
});

export default function useSettings() {
  if (!inititialized) {
    const savedSettings = localStorage.get("settings");
    state = savedSettings ? reactive({ ...savedSettings }) : state;

    watch(state, () => localStorage.set("settings", state), { deep: true });

    inititialized = true;
  }

  return toRefs(state);
}

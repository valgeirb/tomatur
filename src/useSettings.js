import { reactive, watch, toRefs } from "vue";

let state = reactive({
  session: 25,
  smallBreak: 5,
  longBreak: 15,
  notifications: false,
  sound: false,
  darkTheme: false,
  showInfoButton: true,
});

let inititialized = false;

const localStorage = {
  get: (key) => JSON.parse(window.localStorage.getItem(key)),
  set: (key, data) => window.localStorage.setItem(key, JSON.stringify(data)),
};

export default function useSettings() {
  if (!inititialized) {
    const savedSettings = localStorage.get("settings");
    state = savedSettings ? reactive({ ...savedSettings }) : state;
    inititialized = true;
  }

  watch(
    () => state,
    () => {
      localStorage.set("settings", state);
    },
    { deep: true },
  );

  return toRefs(state);
}

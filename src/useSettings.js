import { reactive, computed, watch } from "vue";

let state = reactive({
  session: 25,
  smallBreak: 5,
  longBreak: 15,
  notifications: false,
  sound: false,
  darkTheme: false,
  showInfoButton: true,
});

const localStorage = {
  get: (key) => JSON.parse(window.localStorage.getItem(key)),
  set: (key, data) => window.localStorage.setItem(key, JSON.stringify(data)),
};

export default function useSettings() {
  const savedSettings = localStorage.get("settings");
  state = savedSettings ? reactive({ ...savedSettings }) : state;

  const settings = computed(() => state);

  watch(
    () => settings.value,
    () => {
      localStorage.set("settings", state);
    },
    { deep: true },
  );

  return {
    settings,
  };
}

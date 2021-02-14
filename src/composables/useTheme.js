import { ref } from "vue";

let initialized = false;

const localStorage = {
  get: (key) => window.localStorage.getItem(key),
  set: (key, data) => window.localStorage.setItem(key, data),
};

function initTheme() {
  if (
    window.localStorage.theme === "dark" ||
    (!("theme" in window.localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.querySelector("html").classList.add("dark");
    window.localStorage.setItem("theme", "dark");
  } else {
    document.querySelector("html").classList.remove("dark");
    window.localStorage.setItem("theme", "light");
  }
}

export default function useTheme() {
  const currentTheme = ref();
  const toggleTheme = () => {
    if (localStorage.get("theme") === "light") {
      localStorage.set("theme", "dark");
      currentTheme.value = "dark";
      document.querySelector("html").classList.add("dark");
    } else {
      localStorage.set("theme", "light");
      currentTheme.value = "light";
      document.querySelector("html").classList.remove("dark");
    }
  };

  if (!initialized) {
    initTheme();
    currentTheme.value = localStorage.get("theme");
    initialized = true;
  }

  return {
    currentTheme,
    toggleTheme,
  };
}

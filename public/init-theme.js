(function initTheme() {
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
})();

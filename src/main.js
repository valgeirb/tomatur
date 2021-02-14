import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faPlay,
  faStop,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

library.add(faBars, faQuestionCircle, faPlay, faStop, faChevronLeft);

const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router);
app.mount("#app");

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSlidersH,
  faInfo,
  faPlay,
  faUndoAlt,
  faListUl,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

library.add(faSlidersH, faInfo, faPlay, faUndoAlt, faListUl, faChevronLeft);
const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router);
app.mount("#app");

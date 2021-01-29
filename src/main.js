import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSlidersH,
  faQuestion,
  faPlay,
  faStop,
  faListUl,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

library.add(faSlidersH, faQuestion, faPlay, faStop, faListUl, faChevronLeft);
const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router);
app.mount("#app");

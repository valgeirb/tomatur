import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue(), VitePWA()],
};

/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import { createPinia } from "pinia";

// Types
import type { App } from "vue";

const pinia = createPinia();

export function registerPlugins(app: App) {
  loadFonts();
  app.use(pinia);
  app.use(vuetify);
}

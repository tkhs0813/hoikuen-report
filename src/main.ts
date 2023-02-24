import { createApp } from "vue";

import App from "./App.vue";
import { registerPlugins } from "@/plugins";
import router from "@/router";

import "@/scss/style.scss";
import { worker } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
  worker.start({ onUnhandledRequest: "bypass" });
}

const app = createApp(App);

registerPlugins(app);
app.use(router);

app.mount("#app");

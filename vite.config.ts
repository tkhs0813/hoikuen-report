import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import eslint from "vite-plugin-eslint";

import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
    eslint(),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: { charset: false },
      css: { charset: false },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    deps: {
      inline: ["vuetify"],
    },
  },
});

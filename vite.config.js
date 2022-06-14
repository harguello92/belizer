import { defineConfig } from "vite";
const { pathname: root } = new URL("src/main.ts", import.meta.url);

export default defineConfig({
  build: {
    lib: {
      entry: root,
      name: "Belizer",
      formats: ["es", "cjs"],
    },
  },
});

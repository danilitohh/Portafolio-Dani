import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  server: {
    watch: {
      ignored: ["**/.chrome-profile*/**", "**/validation/**"],
    },
  },
  build: {
    target: "es2022",
  },
});

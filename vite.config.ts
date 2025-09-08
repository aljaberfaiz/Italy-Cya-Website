// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Italy-Cya-Website/",        // <-- change to your repo name
  plugins: [react()],
  build: { outDir: "docs", emptyOutDir: true },
});

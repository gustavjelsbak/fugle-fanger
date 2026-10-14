import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
export default defineConfig({
  root: fileURLToPath(new URL("./pages", import.meta.url)),
  base: "/fugle-fanger/",
  publicDir: fileURLToPath(new URL("./public", import.meta.url)),
  plugins: [react()],
  build: { outDir: fileURLToPath(new URL("./pages-dist", import.meta.url)), emptyOutDir: true },
});

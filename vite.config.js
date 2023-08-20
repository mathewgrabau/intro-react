import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Fairly basic configuration that just takes care of it.
export default defineConfig({
  plugins: [react()],
  root: "src",
});

import { defineConfig } from "astro/config";
import react from "@astrojs/react"; // ← este es el que te falta
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});

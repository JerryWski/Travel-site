import { defineConfig, passthroughImageService } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  image: {
    service: passthroughImageService()
  },
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});
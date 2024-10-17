import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import { vercelToolbar } from '@vercel/toolbar/plugins/vite';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [react(), vercelToolbar()]
});
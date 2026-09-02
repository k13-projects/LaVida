import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base path - use '/' for custom domain (www.lavida.fit)
  // The CNAME file in public/ configures the custom domain
  base: '/',
  server: {
    host: "::",
    // K13 dev port 9146 (registry: War Room starter-kit/CONVENTIONS.md; one fixed port per
    // project, for life). Was 8080 until 2026-09-02. strictPort: a collision fails loudly
    // instead of silently moving to the next port.
    port: 9146,
    strictPort: true,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

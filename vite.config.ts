import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.GITHUB_ACTIONS ? "/Portfolio_Piyush/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    {
      name: "decap-admin-dev-rewrite",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split("?")[0] ?? "";

          if (url === "/admin") {
            res.statusCode = 302;
            res.setHeader("Location", "/admin/");
            res.end();
            return;
          }

          if (url === "/admin/") {
            const adminIndexPath = path.resolve(__dirname, "public/admin/index.html");
            const html = fs.readFileSync(adminIndexPath, "utf-8");
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(html);
            return;
          }

          next();
        });
      },
    },
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import * as path from "path";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx", "**/*.ts", "**/*.tsx"],
      exclude: [],
    }),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      styles: path.resolve(__dirname, "src/styles"),
      router: path.resolve(__dirname, "src/router"),
      pages: path.resolve(__dirname, "src/pages"),
      Store: path.resolve(__dirname, "src/Store"),
      types: path.resolve(__dirname, "src/types"),
      utils: path.resolve(__dirname, "src/utils"),
      layout: path.resolve(__dirname, "src/layout"),
      config: path.resolve(__dirname, "src/config"),
      hooks: path.resolve(__dirname, "src/hooks"),
    },
  },
});

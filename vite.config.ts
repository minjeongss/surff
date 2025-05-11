import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "packages/index.tsx"),
      name: "surff",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    commonjsOptions: {
      esmExternals: ["react", "react-dom"],
    },
  },
  plugins: [tailwindcss(), dts({ tsconfigPath: "./tsconfig.app.json" })],
});

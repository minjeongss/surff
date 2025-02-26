import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(
        __dirname,
        "packages/index.tsx",
        "packages/lib/components.ts",
        "packages/lib/hooks.ts"
      ),
      name: "surff",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
    commonjsOptions: {
      esmExternals: ["react", "react-dom", "styled-components"],
    },
  },
  plugins: [dts({ tsconfigPath: "./tsconfig.app.json" })],
});

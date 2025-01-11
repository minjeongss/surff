import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.tsx"),
      name: "surff",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    commonjsOptions: {
      esmExternals: ["react"],
    },
  },
  plugins: [
    dts({
      tsconfigPath: "./tsconfig.app.json",
      outDir: "./dist",
      entryRoot: "./src",
      exclude: ["src/vite-env.d.ts"],
      compilerOptions: {
        baseUrl: "./src",
      },
    }),
  ],
});

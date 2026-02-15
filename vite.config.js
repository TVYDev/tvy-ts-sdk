import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: {
        "tvy-ts-sdk": resolve(__dirname, "src/index.ts"),
        utils: resolve(__dirname, "src/utils/index.ts"),
      },
      name: "tvy-ts-sdk",
      formats: ["es"],
    },
  },
  plugins: [dts({ rollupTypes: true })],
});

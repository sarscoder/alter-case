import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "es",
    },
    {
      name: "alterCase",
      file: "dist/index.umd.js",
      format: "umd",
    },
    {
      name: "alterCase",
      file: "dist/index.min.js",
      format: "umd",
      plugins: [terser()],
    },
  ],
  plugins: [babel({ exclude: "node_modules/**" })],
};

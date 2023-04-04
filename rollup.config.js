import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "pages/client.ts",
    output: {
      file: "dist/client.js",
      format: "es", // ES Module format for modern browsers
    },
    plugins: [resolve(), typescript({ module: "esnext" })],
  },
];

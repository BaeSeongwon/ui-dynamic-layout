import babel from "@rollup/plugin-babel";
import typescript from 'rollup-plugin-typescript2';

export default {
  input: "./src/index.ts",
  external: ['react', 'react-dom', 'styled-components'],
  output: [
    {
      file: "./build/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "./build/index.es.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    typescript({
      tsconfig: 'tsconfig.json'
    })
  ],
};
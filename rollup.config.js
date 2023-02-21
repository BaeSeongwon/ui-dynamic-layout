import babel from "@rollup/plugin-babel";
import typescript from 'rollup-plugin-typescript2';

export default {
  input: "./index.js",
  external: ['uuid', 'react', 'react-dom'],
  output: {
    file: "./dist/bundle.js",
    format: "es",
    sourcemap: true,
  },
  plugins: [
    babel({
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    typescript({
      tsconfig: 'tsconfig.json'
    })
  ],
};
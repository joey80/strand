import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: 'inline',
      },
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        sourcemap: 'inline',
      },
    ],
    plugins: [
      babel({
        babelHelpers: 'runtime',
        exclude: /^(.+\/)?node_modules\/.+$/,
        extensions: ['.js', '.ts', '.tsx'],
        skipPreflightCheck: 'true',
      }),
      commonjs(),
      resolve(),
      peerDepsExternal(),
      postcss({
        extract: false,
        modules: true,
        use: ['sass'],
      }),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];

// @ts-check

import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import tslint from 'rollup-plugin-tslint';
import typescript from 'rollup-plugin-typescript2';

const isProd = !process.env.ROLLUP_WATCH;
const pluginFn = (iife) => [
  isProd && tslint({
    throwError: true,
    configuration: `tslint${isProd ? '.prod' : ''}.json`,
  }),
  typescript({
    tsconfig: './tsconfig.json',
    exclude: isProd ? ['src/(demo|test)/**/*'] : [],
    ...(iife ? { tsconfigOverride: { target: 'es5' } } : {}),
  }),
  isProd && terser(),
  isProd && filesize({ showBrotliSize: true }),
];

const multiBuild = [
  {
    input: ['src/index.ts'],
    file: 'dist/index.mjs',
    format: 'esm',
    exports: 'named',
    sourcemap: true,
  },
  {
    input: ['src/index.ts'],
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
  },
  {
    input: ['src/index.ts'],
    file: 'dist/normalize-diacritics.js',
    format: 'esm',
    sourcemap: true,
  },
  {
    input: ['src/index.ts'],
    file: 'dist/normalize-diacritics.iife.js',
    name: 'NormalizeDiacritics',
    format: 'iife',
    sourcemap: true,
    exports: 'named',
  }
].map(({ input, ...n }) => ({ input, output: n, plugins: pluginFn('iife' === n.format) }));

export default multiBuild;

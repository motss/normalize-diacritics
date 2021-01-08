// @ts-check

import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import typescript from 'rollup-plugin-typescript2';

const isProd = !process.env.ROLLUP_WATCH;
const input = ['src/normalize-diacritics.ts'];
const pluginFn = (format, minify) => {
  return [
    typescript({
      tsconfig: './tsconfig.json',
      exclude: isProd ? ['src/(demo|test)/**/*'] : [],
      ...('umd' === format ? { tsconfigOverride: { compilerOptions: { target: 'es5' } } } : {}),
    }),
    isProd && minify && terser({
      compress: true,
      mangle: {
        module: 'esm' === format,
        properties: { regex: /^_/ },
        reserved: [],
        safari10: true,
        toplevel: true,
      },
      output: { safari10: true },
      safari10: true,
      toplevel: true,
    }),
    isProd && filesize({ showBrotliSize: true }),
  ];
};

const multiBuild = [
  {
    file: 'dist/index.mjs',
    format: 'esm',
    exports: 'named',
  },
  {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'named',
  },
  {
    file: 'dist/normalize-diacritics.umd.js',
    format: 'umd',
    name: 'NormalizeDiacritics',
    exports: 'named',
  },
  {
    file: 'dist/normalize-diacritics.js',
    format: 'esm',
  },
].reduce((p, n) => {
  const opts = [false, true].map(o => ({
    input,
    output: {
      ...n,
      file: o ? n.file.replace(/(.+)(\.m?js)$/, '$1.min$2') : n.file,
      sourcemap: true,
      sourcemapExcludeSources: true,
    },
    plugins: pluginFn(n.format, o),
    treeshake: { moduleSifeEffects: false },
    ...('umd' === n.format ? { context: 'window' } : {}),
  }));

  return (p.push(...opts), p);
}, []);

export default multiBuild;

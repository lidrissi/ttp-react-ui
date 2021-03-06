import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve';
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import json from '@rollup/plugin-json';
import alias from 'rollup-plugin-alias';
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    alias({
      resolve: ['.jsx', '.js'],
      entries: {
        i18n: 'src/i18n/index.js',
      }
    }),
    url(),
    svgr(),
    babel({
      exclude: ['node_modules/**', '**/*.json'],
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs(),
    json(),
    serve({ contentBase: 'public' })
  ]
}

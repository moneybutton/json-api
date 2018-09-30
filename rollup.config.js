import babel from 'rollup-plugin-babel'
import commonJS from 'rollup-plugin-commonjs'
import fs from 'fs'
import minify from 'rollup-plugin-babel-minify'
import path from 'path'
import pkg from './package.json'
import resolve from 'rollup-plugin-node-resolve'

export default [
  {
    input: path.resolve(__dirname, 'src', 'index.js'),
    external: isExternal,
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
      babel({
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              targets: {
                node: 'current'
              }
            }
          ]
        ]
      })
    ]
  },
  {
    input: path.resolve(__dirname, 'src', 'index.js'),
    output: [
      {
        file: pkg.unpkg,
        format: 'iife',
        name: pkg.library,
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonJS(),
      babel({
        exclude: ['../../node_modules/**', 'node_modules/**'],
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              targets: {
                browsers: ['> 2%']
              }
            }
          ]
        ],
        runtimeHelpers: true,
        plugins: ['@babel/plugin-transform-runtime']
      }),
      minify({
        comments: false,
        banner: getBanner(),
        bannerNewLine: true
      })
    ]
  }
]

function isExternal (candidate) {
  return Object.keys(pkg.dependencies).some(dependency => {
    return candidate.startsWith(dependency)
  })
}

function getBanner () {
  const filePath = path.resolve(__dirname, 'src', 'banner.js')
  return fs.readFileSync(filePath).toString().trim()
}

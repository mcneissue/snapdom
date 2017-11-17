import babel from 'rollup-plugin-babel'

const pkg = require('./package.json');
const external = Object.keys(Object.assign({}, pkg.dependencies, pkg.peerDependencies));

const plugins = [
  babel({
    exclude: 'node_modules/**'
  })
]

export default {
  input: 'src/index.js',
  plugins,
  external,
  output: [
    {
      file: 'dist/snapdom.js',
      format: 'cjs',
      name: 'snapdom',
      sourcemap: true
    }
  ]
}
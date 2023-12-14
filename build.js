const esbuild = require('esbuild')
const { nodeExternalsPlugin } = require('esbuild-node-externals')
const browserslist = require('browserslist')
const { esbuildPluginBrowserslist } = require('esbuild-plugin-browserslist')

const config = {
  logLevel: 'info',
  entryPoints: ['src/index.js'],
  // minify: true,
  bundle: true,
  inject: ['src/react-shim.js'],
  loader: {
    '.js': 'jsx',
    '.jsx': 'jsx'
  },
  plugins: [
    nodeExternalsPlugin(),
    esbuildPluginBrowserslist(browserslist(), {
      printUnknownTargets: false
    })
  ]
}

esbuild.build({
  ...config,
  format: 'esm',
  outfile: 'es/index.js'
})

esbuild.build({
  ...config,
  format: 'cjs',
  outfile: 'lib/index.js'
})

const path = require('path')
const withTypescript = require('@zeit/next-typescript')

const nodeModulesPath = path.join(__dirname, 'node_modules')
const sharedAssetsPath = path.join(__dirname, 'shared/assets')

module.exports = withTypescript({
  cssModules: true,
  cssLoaderOptions: {
    includePaths: [
      nodeModulesPath,
      sharedAssetsPath,
    ],
  },
  sassLoaderOptions: {
    includePaths: [
      nodeModulesPath,
      sharedAssetsPath,
    ],
  },
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
})

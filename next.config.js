const path = require('path')

module.exports = {
  webpack(config) {
    const newConfig = {
      ...config,
    }
    newConfig.resolve.alias.common = path.resolve(__dirname, 'common')
    return newConfig
  },
  webpackDevMiddleware: config => ({
    ...config,
    watchOptions: {
      poll: 1000,
      ignored: 'node_modules',
    },
  }),
}

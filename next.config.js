module.exports = {
  webpackDevMiddleware: config => ({
    ...config,
    watchOptions: {
      poll: 1000,
      ignored: 'node_modules',
    },
  }),
}

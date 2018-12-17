/* eslint-disable */
const withLess = require('@zeit/next-less')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  // eslint-disable-next-line no-unused-vars
  require.extensions['.less'] = (file) => {}
}

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
})

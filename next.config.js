/* eslint-disable */
const withCss = require('@zeit/next-css')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  // eslint-disable-next-line no-unused-vars
  require.extensions['.css'] = (file) => {}
}

module.exports = withCss()

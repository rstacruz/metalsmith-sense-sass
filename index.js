var ware = require('ware')
var assign = require('object-assign')

module.exports = function (options) {
  if (!options) options = {}
  options.sass = assign({}, sassDefaults(), options.sass || {})
  options.postcss = options.postcss || postcssDefaults()

  return function (files, ms, done) {
    ware()
      .use(require('metalsmith-ignore')([ '**/_*.{scss,sass}' ]))
      .use(require('metalsmith-sass')(options.sass))
      .use(require('metalsmith-postcss')(options.postcss))
      .run(files, ms, done)
  }
}

/*
 * Private: sets sass default options
 */

function sassDefaults () {
  if (process.env.NODE_ENV !== 'production') {
    return {
      outputStyle: 'expanded',
      sourceMapEmbed: true,
      sourcemapContents: true,
      importer: require('node-sass-import')
    }
  } else {
    return {
      outputStyle: 'compressed',
      sourceMap: false,
      importer: require('node-sass-import')
    }
  }
}

function postcssDefaults () {
  try {
    return { plugins: { 'postcss-cssnext': {} } }
  } catch (e) {
    return {}
  }
}

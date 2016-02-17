var ware = require('ware')
var assign = require('object-assign')

module.exports = function (options) {
  if (!options) options = {}
  options.sass = assign({}, sassDefaults(), options.sass || {})
  options.postcss = options.postcss || {}

  return function (files, ms, done) {
    ware()
      .use(require('metalsmith-ignore')([ '**/_*.{scss,sass}' ]))
      .use(require('metalsmith-sass')(options.sass))
      .use(require('metalsmith-postcss')(toPostcss(options.postcss)))
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
      sourcemapContents: true
    }
  } else {
    return {
      outputStyle: 'compressed',
      sourceMap: false
    }
  }
}

/*
 * Private: returns an array of postcss plugins.
 *
 *     toPostcss({
 *       'postcss-nested': {},
 *       'postcss-pseudoelements': {}
 *     })
 *
 *     // same as:
 *     [
 *       require('postcss-nested')({}),
 *       require('postcss-pseudoelements')({})
 *     ]
 */

function toPostcss (plugins) {
  return Object.keys(plugins).map(function (plugin) {
    return require(plugin)(plugins[plugin])
  })
}

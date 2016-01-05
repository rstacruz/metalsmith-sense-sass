var ware = require('ware')
var assign = require('object-assign')

module.exports = function (options) {
  if (!options) options = {}
  options.sass = assign({}, sassDefaults(), options.sass || {})

  return function (files, ms, done) {
    ware()
      .use(require('metalsmith-ignore')([ '**/_*.{scss,sass}' ]))
      .use(require('metalsmith-sass')(options.sass))
      .use(require('metalsmith-autoprefixer')(options.autoprefixer))
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
      sourceMap: true,
      sourceMapContents: true
    }
  } else {
    return {
      outputStyle: 'compressed',
      sourceMap: false
    }
  }
}

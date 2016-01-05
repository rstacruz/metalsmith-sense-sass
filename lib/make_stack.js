/*
 * Returns a Metalsmith plugin that strings together other plugins.
 */

function makeStack (fn) {
  return function stack (options) {
    var stack = fn(options || {})

    var middleware = function (files, metalsmith, done) {
      stack.run(files, metalsmith, done)
    }

    middleware.name = fn.name
    return middleware
  }
}

module.exports = makeStack

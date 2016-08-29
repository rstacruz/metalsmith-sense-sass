var ms = require('metalsmith')(__dirname)
  .source('./src')
  .destination('./public')
  .use(require('../../index')())

if (module.parent) {
  module.exports = ms
} else {
  ms.build(function (err) {
    if (err) throw err
  })
}

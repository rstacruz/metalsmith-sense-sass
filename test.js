var sense = require('./index')
var Metalsmith = require('metalsmith')
var test = require('tape')
var join = require('path').join

test('metalsmith-sense-sass', function (t) {
  var ms = new Metalsmith('fixtures/basic')
    .source('src')
    .destination('public')
    .use(sense())

  ms.build(function (err) {
    if (err) t.fail(err)
    var data = read(ms.path('public/hello.css'))
    t.ok(data.indexOf('display: -ms-flexbox') > -1, 'autoprefixer enabled')
    t.end()
  })
})

function read (file) {
  return require('fs').readFileSync(file, 'utf-8')
}

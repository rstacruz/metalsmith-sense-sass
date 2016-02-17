var sense = require('./index')
var Metalsmith = require('metalsmith')
var test = require('tape')
var join = require('path').join

test('metalsmith-sense-sass (development)', function (t) {
  var ms = new Metalsmith('fixtures/basic')
    .source('src')
    .destination('public')
    .use(sense({ postcss: { 'postcss-cssnext': {} } }))

  ms.build(function (err) {
    if (err) t.fail(err)
    var data = read(ms.path('public/hello.css'))

    t.ok(data.indexOf('display: -ms-flexbox') > -1,
      'autoprefixer enabled')

    t.ok(data.indexOf('sourceMappingURL=data:application') > -1,
      'sourcemaps embedded')

    t.end()
  })
})

function read (file) {
  return require('fs').readFileSync(file, 'utf-8')
}

test('metalsmith-sense-sass (production)', function (t) {
  process.env.NODE_ENV = 'production'
  var ms = new Metalsmith('fixtures/basic')
    .source('src')
    .destination('public')
    .use(sense({ postcss: { 'postcss-cssnext': {} } }))

  ms.build(function (err) {
    if (err) t.fail(err)
    var data = read(ms.path('public/hello.css'))

    t.ok(data.indexOf('display:-ms-flexbox;') > -1,
      'compressed')

    t.ok(data.indexOf('sourceMappingURL=data:application') === -1,
      'sourcemaps disabled')

    t.end()
  })
})

function read (file) {
  return require('fs').readFileSync(file, 'utf-8')
}

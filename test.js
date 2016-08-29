var sense = require('./index')
var Metalsmith = require('metalsmith')
var test = require('tape')
var join = require('path').join

test('metalsmith-sense-sass (development)', function (t) {
  var ms = new Metalsmith('fixtures/basic')
    .source('src')
    .destination('public')
    .use(sense())

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
    .use(sense())

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

test('sass import', function (t) {
  var ms = new Metalsmith('fixtures/sass_import')
    .source('src')
    .destination('public')
    .use(sense())

  ms.build(function (err) {
    if (err) t.fail(err)
    var data = read(ms.path('public/hello.css'))

    t.ok(data.indexOf('font-family') > -1,
      'normalize.css enabled')

    t.end()
  })
})

test('glob import', function (t) {
  var ms = new Metalsmith('fixtures/sass_glob')
    .source('src')
    .destination('public')
    .use(sense())

  ms.build(function (err) {
    if (err) t.fail(err)
    var data = read(ms.path('public/hello.css'))

    t.ok(data.indexOf('div') > -1,
      'works')

    t.end()
  })
})

function read (file) {
  return require('fs').readFileSync(file, 'utf-8')
}

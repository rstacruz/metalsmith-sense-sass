# metalsmith-sense-sass

A sensible distribution of [Sass][] for [Metalsmith][].

- combines [metalsmith-sass][] and [metalsmith-postcss][]
- uses [postcss-cssnext][] when available
- compresses output on production
- adds source maps in development mode
- ignores sass partials (`_*.sass`)

[![Status](https://travis-ci.org/rstacruz/metalsmith-sense-sass.svg?branch=master)](https://travis-ci.org/rstacruz/metalsmith-sense-sass "See test builds")

Available options:

- `sass` - options to pass to metalsmith-sass.
- `postcss` - plugins to load for postcss. This is in the format of a key/value object, where keys are string package names, and the values are options to be passed to each plugin.

Environment variables:

- `NODE_ENV` (environment variable) - set to `production` to enable compression and disable source maps.

[Metalsmith]: http://www.metalsmith.io/
[Sass]: http://sass-lang.com/
[metalsmith-sass]: https://www.npmjs.com/package/metalsmith-sass
[metalsmith-postcss]: https://www.npmjs.com/package/metalsmith-postcss

## Usage

It's recommended to use this with [postcss-cssnext][], which will take care of vendor prefixing.

```sh
npm install --save metalsmith-sense-sass postcss-cssnext
```

When using `metalsmith.json`:

```json
{
  "plugins": {
    "metalsmith-sense-sass": {}
  }
}
```

When using `metalsmith.js`:

```js
var ms = new Metalsmith(__dirname)
  .source('src')
  .destination('public')
  .use(require('metalsmith-sense-sass')())
```

[postcss-cssnext]: https://www.npmjs.com/package/postcss-cssnext

## Using without postcss-cssnext

If `postcss-cssnext` is not available, it won't be used.

## Using with other postCSS plugins

```js
var ms = new Metalsmith(__dirname)
  .source('src')
  .destination('public')
  .use(require('metalsmith-sense-sass')({
    postcss: {
      'postcss-import': {},
      'postcss-cssnext': {}
    }
  }))
```

## Also see

Also consider [metalsmith-start](https://www.npmjs.com/package/metalsmith-start) as a convenient development server with LiveReload support and more.

## Thanks

**metalsmith-sense-sass** © 2015+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/metalsmith-sense-sass/contributors

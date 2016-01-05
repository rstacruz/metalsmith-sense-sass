# metalsmith-sense-sass

A sensible distribution of [Sass][] for [Metalsmith][].

- combines [metalsmith-sass][] and [metalsmith-autoprefixer][]
- compresses output on production
- adds source maps in development mode
- ignores sass partials (`_*.sass`)

Available options:

- `sass` - options to pass to metalsmith-sass.
- `autoprefixer` - options to pass to metalsmith-autoprefixer.

Environment variables:

- `NODE_ENV` (environment variable) - set to `production` to enable compression and disable source maps.

[Metalsmith]: http://www.metalsmith.io/
[Sass]: http://sass-lang.com/
[metalsmith-sass]: https://www.npmjs.com/package/metalsmith-sass
[metalsmith-autoprefixer]: https://www.npmjs.com/package/metalsmith-autoprefixer

## Usage

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

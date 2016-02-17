# metalsmith-sense-sass

> A sensible distribution of [Sass][] for [Metalsmith][].

- uses [metalsmith-sass][] with environment-specific defaults
	- compresses output on production
	- adds source maps in development mode
- uses [metalsmith-postcss][] for optional postcss plugins to be used after Sass
- uses [postcss-cssnext][] when available (for vendor prefix polyfills and more)
- ignores sass partials (`_*.sass`)

[![Status](https://travis-ci.org/rstacruz/metalsmith-sense-sass.svg?branch=master)](https://travis-ci.org/rstacruz/metalsmith-sense-sass "See test builds")

## Options

```js
require('metalsmith-sense-sass')(options)
```

#### Available options:

- `sass` *(Object)* — Options to pass to metalsmith-sass. See [node-sass][] for a list of available options.

- `postcss` *(Object)* — List of plugins to load for postcss. This is in the format of a key/value object, where keys are string package names, and the values are options to be passed to each plugin.

#### Environment variables:

- `NODE_ENV` *(environment variable)* — set to `production` to enable compression and disable source maps.

[Metalsmith]: http://www.metalsmith.io/
[Sass]: http://sass-lang.com/
[node-sass]: https://github.com/sass/node-sass#options
[metalsmith-sass]: https://www.npmjs.com/package/metalsmith-sass
[metalsmith-postcss]: https://www.npmjs.com/package/metalsmith-postcss

## Usage

It's recommended to use this with [postcss-cssnext][], which will take care of vendor prefixing.

```sh
npm install --save metalsmith-sense-sass postcss-cssnext
```

* When using `metalsmith.json`:

	```json
	{
	  "plugins": {
	    "metalsmith-sense-sass": {}
	  }
	}
	```

* When using `metalsmith.js`:

	```js
	var ms = new Metalsmith(__dirname)
	  .source('src')
	  .destination('public')
	  .use(require('metalsmith-sense-sass')())
	```

[postcss-cssnext]: https://www.npmjs.com/package/postcss-cssnext

For other installation options (eg, using other postcss plugins), see [Installation](docs/installation.md).

## Upgrading from 1.x

metalsmith-sense-sass 1.x uses autoprefixer by default, which 2.x doesn't anymore. To upgrade and keep the old behavior, simply install [postcss-cssnext][] in your project—cssnext includes autoprefixer, and metalsmith-sense-sass will automatically use cssnext if it's available.

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

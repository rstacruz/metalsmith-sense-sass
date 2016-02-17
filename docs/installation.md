# Installation

## Using without postcss-cssnext

If `postcss-cssnext` is not available, it won't be used. If it's available and you *don't* want to use it, pass `{}` to the `postcss` options.

```json
{
  "plugins": {
    "metalsmith-sense-sass": {
      "postcss": {}
    }
  }
}
```

```js
var ms = new Metalsmith(__dirname)
  .source('src')
  .destination('public')
  .use(require('metalsmith-sense-sass')({
    postcss: {}
  }))
```

## Using with other postCSS plugins

```json
{
  "plugins": {
    "metalsmith-sense-sass": {
      "postcss": {
        "postcss-import": {},
        "postcss-cssnext": {}
      }
    }
  }
}
```

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

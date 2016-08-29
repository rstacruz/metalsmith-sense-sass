# Installation

## Using with other postCSS plugins

```json
{
  "plugins": {
    "metalsmith-sense-sass": {
      "postcss": {
        "plugins": {
          "postcss-import": {},
          "postcss-cssnext": {}
        }
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
      plugins: {
        'postcss-import': {},
        'postcss-cssnext': {}
      }
    }
  }))
```

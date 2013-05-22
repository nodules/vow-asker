# Vow Asker

Module wraps [asker](/kaero/node-asker) API in the [Vow](https://github.com/dfilatov/jspromise) promises implementation.

# Install

```
npm install vow-asker
```

## Usage

```javascript
var ask = require('vow-asker');

ask({ host : 'ya.ru' })
    .then(function(response) {

    })
    .fail(function(error) {
        error.log();
    });
```

## More docs

See [asker](/kaero/node-asker) for documentation about asker options and [Vow](https://github.com/dfilatov/jspromise) for promises docs.

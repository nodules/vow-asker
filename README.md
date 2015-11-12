Vow Asker [![NPM version][npm-image]][npm-link]
=========

[![Dependency status][deps-image]][deps-link]
[![devDependency status][devdeps-image]][devdeps-link]

Module wraps [asker](https://github.com/nodules/asker) API in the [Vow](https://github.com/dfilatov/vow) promises implementation.

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

See [asker](https://github.com/nodules/asker) for documentation about asker options and [Vow](https://github.com/dfilatov/vow) for promises docs.

[npm-image]: https://img.shields.io/npm/v/vow-asker.svg?style=flat
[npm-link]: https://npmjs.org/package/vow-asker
[deps-image]: https://img.shields.io/david/nodules/vow-asker.svg?style=flat
[deps-link]: https://david-dm.org/nodules/vow-asker
[devdeps-image]: https://img.shields.io/david/dev/nodules/vow-asker.svg?style=flat
[devdeps-link]: https://david-dm.org/nodules/vow-asker#info=peerDependencies

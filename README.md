# normalize-diacritics

> Simple module to normalize any diacritics in a given string. 

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Coverage percentage][coveralls-image]][coveralls-url]

## How to use

1. Install via `npm`: `npm install --save normalize-diacritics`.

1. Brief example to use the package.

```js
const { diacritics, normalize } = require('normalize-diacritics');

/* To show the list of diacritics */
console.log(diacritics);

/* To normalize string */
const str = 'söme stüff with áccènts';
normalize(str); // some stuff with accents
```

## License

[MIT License](http://motss.mit-license.org/) © Rong Sen Ng


[npm-image]: https://badge.fury.io/js/normalize-diacritics.svg
[npm-url]: https://npmjs.org/package/normalize-diacritics
[travis-image]: https://travis-ci.org/motss/normalize-diacritics.svg?branch=master
[travis-url]: https://travis-ci.org/motss/normalize-diacritics
[daviddm-image]: https://david-dm.org/motss/normalize-diacritics.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/motss/normalize-diacritics
[coveralls-image]: https://coveralls.io/repos/github/motss/normalize-diacritics/badge.svg
[coveralls-url]: https://coveralls.io/github/motss/normalize-diacritics

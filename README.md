# normalize-diacritics

> Simple module to normalize any diacritics in a given string. 

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Coverage percentage][coveralls-image]][coveralls-url]
[![codecov][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

<!--[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]-->

## Install

```sh
$ npm install --save normalize-diacritics
```

## Usage

Brief example to show how to use:

```js
const { diacritics, normalize } = require('normalize-diacritics');

/* To show the list of diacritics */
console.log(diacritics);  // { letter: ' ', diacritics: /[\u00a0]/g } ...

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
[coveralls-image]: https://coveralls.io/repos/github/motss/normalize-diacritics/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/motss/normalize-diacritics?branch=master
[snyk-image]: https://snyk.io/test/github/motss/normalize-diacritics/badge.svg
[snyk-url]: https://snyk.io/test/github/motss/normalize-diacritics
[codecov-image]: https://codecov.io/gh/motss/normalize-diacritics/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/motss/normalize-diacritics

<!--[greenkeeper-image]: https://badges.greenkeeper.io/motss/normalize-diacritics.svg-->
<!--[greenkeeper-url]: https://greenkeeper.io/-->

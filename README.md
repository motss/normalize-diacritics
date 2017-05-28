[![Stories in Ready](https://badge.waffle.io/motss/normalize-diacritics.png?label=ready&title=Ready)](https://waffle.io/motss/normalize-diacritics?utm_source=badge)
# normalize-diacritics

[![NPM][nodei-image]][nodei-url]

> Simple module to normalize any diacritics in a given string. 

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Build status][appveyor-image]][appveyor-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Coverage percentage][coveralls-image]][coveralls-url]
[![codecov][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![NSP Status][nsp-image]][nsp-url]
[![Inline docs][inch-image]][inch-url]
[![GitHub license][license-image]][license-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

## Install

```
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

## Demo

[Simple demo on Runkit](https://runkit.com/motss/normalize-diacritics)

## License

[MIT License](http://motss.mit-license.org/) © Rong Sen Ng


[nodei-image]: https://nodei.co/npm/normalize-diacritics.png?downloads=true&downloadRank=true&stars=true
[nodei-url]: https://nodei.co/npm/normalize-diacritics/
[npm-image]: https://badge.fury.io/js/normalize-diacritics.svg
[npm-url]: https://npmjs.org/package/normalize-diacritics
[travis-image]: https://travis-ci.org/motss/normalize-diacritics.svg?branch=master
[travis-url]: https://travis-ci.org/motss/normalize-diacritics
[appveyor-image]: https://ci.appveyor.com/api/projects/status/g3n1hhl18w3crcrb/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/motss/normalize-diacritics/branch/master
[daviddm-image]: https://david-dm.org/motss/normalize-diacritics.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/motss/normalize-diacritics
[coveralls-image]: https://coveralls.io/repos/github/motss/normalize-diacritics/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/motss/normalize-diacritics?branch=master
[codecov-image]: https://codecov.io/gh/motss/normalize-diacritics/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/motss/normalize-diacritics
[snyk-image]: https://snyk.io/test/github/motss/normalize-diacritics/badge.svg
[snyk-url]: https://snyk.io/test/github/motss/normalize-diacritics
[nsp-image]: https://nodesecurity.io/orgs/motss/projects/02e1b52b-3dc8-4fcf-aa91-8676541b4348/badge
[nsp-url]: https://nodesecurity.io/orgs/motss/projects/02e1b52b-3dc8-4fcf-aa91-8676541b4348
[inch-image]: http://inch-ci.org/github/motss/normalize-diacritics.svg?branch=master
[inch-url]: http://inch-ci.org/github/motss/normalize-diacritics
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://motss.mit-license.org/
[greenkeeper-image]: https://badges.greenkeeper.io/motss/normalize-diacritics.svg
[greenkeeper-url]: https://greenkeeper.io/


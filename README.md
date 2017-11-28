<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">normalize-diacritics</h1>

  <p>Remove accents/ diacritics in strings</p>
</div>

<hr />

[![NPM][nodei-badge]][nodei-url]

[![Build Status][travis-badge]][travis-url]
[![Version][version-badge]][version-url]
[![Downloads][downloads-badge]][downloads-url]
[![MIT License][mit-license-badge]][mit-license-url]
[![NSP Status][nsp-badge]][nsp-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper-url]

[![Code of Conduct][coc-badge]][coc-url]

[![Coverage percentage][coveralls-badge]][coveralls-url]
[![codecov][codecov-badge]][codecov-url]

<!-- [![Codacy Badge][codacy-badge]][codacy-url] -->
[![Inline docs][inch-badge]][inch-url]
<!-- [![codebeat badge][codebeat-badge]][codebeat-url] -->

[![Stories in Ready][waffle-badge]][waffle-url]

> A simple NPM package to remove accents/ diacritics in strings in Javascript.

## Setup

### Pre-requisites

Please make sure that you have the followings installed on your machine:

- `node >= 8.9.0` ___(In Zumata, we internally use the latest LTS version ([node:carbon][node-releases-url]) for all our Node.js applications.)___
- `npm >= 5.5.1` ___(The minimum NPM version for [node:carbon][node-releases-url].)___

### Install the package via NPM

```sh
# NPM install
$ npm install --save normalize-diacritics
```

## How to use

### Typescript or Node.js with native ES Modules

Snippet for using native ES Modules:

```ts
import normalize from 'normalize-diacritics';

(async () => {
  const str = 'söme stüff with áccènts';
  await normalize(str); // some stuff with accents
})();
```

### CommonJS's require

```js
const { normalize } = require('normalize-diacritics');

(async () => {
  const str = 'söme stüff with áccènts';
  await normalize(str); // some stuff with accents
})();
```

## API Reference

### normalize(input)

 - input <[string][string-mdn-url]> Input string that contains accents/ diacritics.
 - returns: <[Promise][promise-mdn-url]<[string][string-mdn-url]>>

This method accepts an input string that contains any accents/ diacritics and normalizes all of them asynchronously and the normalized string will be output as a result.

### normalizeSync(input)

 - input <[string][string-mdn-url]> Input string that contains accents/ diacritics.
 - returns: <[string][string-mdn-url]>

This methods works the same as `normalize(input)` except that this is a synchronous version of `normalize(input)`.

## License

[MIT License](http://motss.mit-license.org/) © Rong Sen Ng

[node-releases-url]: https://nodejs.org/en/download/releases
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

[nodei-badge]: https://nodei.co/npm/normalize-diacritics.png?downloads=true&downloadRank=true&stars=true

[travis-badge]: https://img.shields.io/travis/rust-lang/rust.svg?style=flat-square

[version-badge]: https://img.shields.io/npm/v/delvery.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/delvery.svg?style=flat-square
[mit-license-badge]: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square
[nsp-badge]: https://nodesecurity.io/orgs/motss/projects/92a9a3b3-c0c8-4172-917d-f1c7e0d5ef9f/badge
[daviddm-badge]: https://img.shields.io/david/expressjs/express.svg?style=flat-square
[greenkeeper-badge]: https://badges.greenkeeper.io/motss/normalize-diacritics.svg

[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square

[coveralls-badge]: https://coveralls.io/repos/github/Zumata/normalize-diacritics/badge.svg?branch=master
[codecov-badge]: https://codecov.io/gh/Zumata/normalize-diacritics/branch/master/graph/badge.svg

[codacy-badge]: https://api.codacy.com/project/badge/Grade/c84a41b8422245058a8c1acd17fd7e23
[inch-badge]: http://inch-ci.org/github/zumata/normalize-diacritics.svg?branch=master
[codebeat-badge]: https://codebeat.co/badges/8a0eb7c1-b944-41b1-ad87-5f0bd392873b

[waffle-badge]: https://badge.waffle.io/Zumata/normalize-diacritics.png?label=ready&title=Ready



[nodei-url]: https://nodei.co/npm/normalize-diacritics/

[travis-url]: https://travis-ci.org/motss/normalize-diacritics
[version-url]: https://npmjs.org/package/normalize-diacritics
[downloads-url]: http://www.npmtrends.com/normalize-diacritics
[mit-license-url]: https://github.com/Zumata/normalize-diacritics/blob/master/LICENSE
[nsp-url]: https://nodesecurity.io/orgs/motss/projects/02e1b52b-3dc8-4fcf-aa91-8676541b4348
[daviddm-url]: https://david-dm.org/motss/normalize-diacritics
[greenkeeper-url]: https://greenkeeper.io/

[coc-url]: https://github.com/Zumata/normalize-diacritics/blob/master/CODE_OF_CONDUCT.md

[coveralls-url]: https://coveralls.io/github/motss/normalize-diacritics?branch=master
[codecov-url]: https://codecov.io/gh/motss/normalize-diacritics

[inch-url]: http://inch-ci.org/github/motss/normalize-diacritics

[waffle-url]: https://waffle.io/motss/normalize-diacritics?utm_source=badge

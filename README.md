<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">normalize-diacritics</h1>

  <p>Remove accents/ diacritics in string</p>
</div>

<hr />

[![NPM][nodei-badge]][nodei-url]

[![Build Status][travis-badge]][travis-url]
[![Version][version-badge]][version-url]
[![Downloads][downloads-badge]][downloads-url]
[![MIT License][mit-license-badge]][mit-license-url]
[![NSP Status][nsp-badge]][nsp-url]
[![Dependency Status][daviddm-badge]][daviddm-url]

[![Code of Conduct][coc-badge]][coc-url]

<!-- [![Codacy Badge][codacy-badge]][codacy-url] -->
[![Inline docs][inch-badge]][inch-url]
<!-- [![codebeat badge][codebeat-badge]][codebeat-url] -->

[![Stories in Ready][waffle-badge]][waffle-url]

> Simple [NPM][npm-url] package to remove any accents/ diacritics found in a string.

## Table of contents

- [Pre-requisite](#pre-requisite)
- [How to use](#how-to-use)
  - [Install](#install)
  - [Typescript or Node.js with native ES Modules](#typescript-or-nodejs-with-native-es-modules)
  - [CommonJS's require](#commonjss-require)
- [API Reference](#api-reference)
  - [normalize(input)](#normalizeinput)
  - [normalizeSync(input)](#normalizesyncinput)
- [License](#license)

## Pre-requisite

- [Node.js][node-js-url] >= 8.9.0
- [NPM][npm-url] >= 5.5.1 ([NPM][npm-url] comes with [Node.js][node-js-url] so there is no need to install separately.)

## How to use

### Install

```sh
# Install via NPM
$ npm install --save normalize-diacritics
```

### Typescript or Node.js with native ES Modules

Snippet for using native ES Modules:

```ts
import normalize from 'normalize-diacritics';

(async () => {
  const str = 'söme stüff with áccènts';
  await normalize(str); // some stuff with accents
})();
```

### Node.js

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
 - returns: <[Promise][promise-mdn-url]<[string][string-mdn-url]>> Promise which resolves with normalized input string.

This method normalizes any accents/ diacritics found in a given input string and output a normalized string as a result.

### normalizeSync(input)

 - input <[string][string-mdn-url]> Input string that contains accents/ diacritics.
 - returns: <[string][string-mdn-url]> Promise which resolves with normalized input string.

This methods works the same as `normalize(input)` except that this is the synchronous version.

## License

[MIT License](http://motss.mit-license.org/) © Rong Sen Ng

[node-js-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise



[nodei-badge]: https://nodei.co/npm/normalize-diacritics.png?downloads=true&downloadRank=true&stars=true

[travis-badge]: https://img.shields.io/travis/motss/normalize-diacritics.svg?style=flat-square

[version-badge]: https://img.shields.io/npm/v/normalize-diacritics.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/normalize-diacritics.svg?style=flat-square
[mit-license-badge]: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square
[nsp-badge]: https://nodesecurity.io/orgs/motss/projects/92a9a3b3-c0c8-4172-917d-f1c7e0d5ef9f/badge
[daviddm-badge]: https://img.shields.io/david/expressjs/express.svg?style=flat-square

[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square

[codacy-badge]: https://api.codacy.com/project/badge/Grade/c84a41b8422245058a8c1acd17fd7e23
[inch-badge]: http://inch-ci.org/github/motss/normalize-diacritics.svg?branch=master
[codebeat-badge]: https://codebeat.co/badges/8a0eb7c1-b944-41b1-ad87-5f0bd392873b

[waffle-badge]: https://badge.waffle.io/motss/normalize-diacritics.png?label=ready&title=Ready



[nodei-url]: https://nodei.co/npm/normalize-diacritics/

[travis-url]: https://travis-ci.org/motss/normalize-diacritics
[version-url]: https://npmjs.org/package/normalize-diacritics
[downloads-url]: http://www.npmtrends.com/normalize-diacritics
[mit-license-url]: https://github.com/motss/normalize-diacritics/blob/master/LICENSE
[nsp-url]: https://nodesecurity.io/orgs/motss/projects/02e1b52b-3dc8-4fcf-aa91-8676541b4348
[daviddm-url]: https://david-dm.org/motss/normalize-diacritics

[coc-url]: https://github.com/motss/normalize-diacritics/blob/master/CODE_OF_CONDUCT.md

[inch-url]: http://inch-ci.org/github/motss/normalize-diacritics

[waffle-url]: https://waffle.io/motss/normalize-diacritics?utm_source=badge

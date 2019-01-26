<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">normalize-diacritics</h1>

  <p>Remove accents/ diacritics in string</p>
</div>

<hr />

[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![jsDelivr downloads][jsdelivr-badge]][jsdelivr-url]
[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]
[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

[![Build Status][travis-badge]][travis-url]
[![CircleCI][circleci-badge]][circleci-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![codecov][codecov-badge]][codecov-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[![codebeat badge][codebeat-badge]][codebeat-url]
[![Codacy Badge][codacy-badge]][codacy-url]
[![Code of Conduct][coc-badge]][coc-url]

> Simple [NPM][npm-url] package to remove any accents/ diacritics found in a string.

## Table of contents

<!-- TOC -->

- [Pre-requisite](#pre-requisite)
- [How to use](#how-to-use)
  - [Multiple bundles](#multiple-bundles)
  - [NPM](#npm)
    - [Install](#install)
  - [Node.js](#nodejs)
  - [ES Modules or TypeScript](#es-modules-or-typescript)
- [API Reference](#api-reference)
  - [normalize([input])](#normalizeinput)
  - [normalizeSync([input])](#normalizesyncinput)
- [License](#license)

<!-- /TOC -->

## Pre-requisite

- [Node.js][node-js-url] >= 8.9.0
- [NPM][npm-url] >= 5.5.1 ([NPM][npm-url] comes with [Node.js][node-js-url] so there is no need to install separately.)

## How to use

### Multiple bundles

There are 3 different bundles for different use cases:

1. `esm` - Targeting native ES modules such as ES2015+ and [TypeScript][typescript-url].

    ```ts
    import { normalize } from 'normalize-diacritics';
    /** import { normalizeSync } from 'normalize-diacritics'; */
    ...
    ```

2. `cjs` - Targeting [Node.js][node-js-url] with `CommonJS`.

    ```ts
    const { normalize } = require('normalize-diacritics/dist/index.cjs.js');
    /** const { normalizeSync } = require('normalize-diacritics/dist/index.cjs.js'); */
    ...
    ```

3. `iife` - Targeting older browsers by compiling to `IIFE` and `ES5`.

    ```html
    <!--
      Say, you are using IIFE bundle on browsers such as IE11 by loading it via `unpkg` or `jsDelivr`.
    -->
    ...
    <head>
      <script src="https://unpkg.com/normalize-diacritics@latest/dist/index.iife.js"></script>
      <!-- <script src="https://cdn.jsdelivr.net/npm/normalize-diacritics@latest/dist/index.iife.min.js"></script> -->
    </head>
    ...
    <script>
      const { normalize } = window.NormalizeDiacritics;
      /** const { normalizeSync } = window.NormalizeDiacritics; */
    </script>
    ...
    ```


You can already grab the bundle from such as the follwoing awesome CDNs:

1. [unpkg][unpkg-url]

    - `esm` https://unpkg.com/normalize-diacritics@latest/dist/index.js
    - `cjs` https://unpkg.com/normalize-diacritics@latest/dist/index.cjs.js
    - `iife` https://unpkg.com/normalize-diacritics@latest/dist/index.iife.js

2. [jsdelivr][jsdelivr-url]

    - `esm` https://cdn.jsdelivr.net/npm/normalize-diacritics@latest/dist/index.js
    - `cjs` https://cdn.jsdelivr.net/npm/normalize-diacritics@latest/dist/index.cjs.js
    - `iife` https://cdn.jsdelivr.net/npm/normalize-diacritics@latest/dist/index.iife.js

### NPM

#### Install

```sh
# Install via NPM
$ npm install --save normalize-diacritics
```

### Node.js

```js
const { normalize } = require('normalize-diacritics/dist/index.cjs.js');

(async () => {
  const str = 'söme stüff with áccènts';

  assert.equal(await normalize(str), 'some stuff with accents'); // OK
})();
```

### ES Modules or TypeScript

```ts
import normalize from 'normalize-diacritics';

(async () => {
  const str = 'söme stüff with áccènts';

  assert.equal(await normalize(str), 'some stuff with accents'); // OK
})();
```

## API Reference

### normalize([input])

- `input` <?[string][string-mdn-url]> Optional input string that contains accents/ diacritics.
- returns: <[Promise][promise-mdn-url]<[string][string-mdn-url]>> Promise which resolves with normalized input string.

This method normalizes any accents/ diacritics found in a given input string and output a normalized string as a result.

### normalizeSync([input])

This methods works the same as `normalize([input])` except that this is the synchronous version.

## License

[MIT License](http://motss.mit-license.org/) © Rong Sen Ng

<!-- References -->
[node-js-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[typescript-url]: https://github.com/Microsoft/TypeScript
[unpkg-url]: https://unpkg.com/normalize-diacritics@latest/dist/

<!-- MDN -->
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[html-style-element-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

<!-- Badges -->
[version-badge]: https://flat.badgen.net/npm/v/normalize-diacritics
[node-version-badge]: https://flat.badgen.net/npm/node/normalize-diacritics
[mit-license-badge]: https://flat.badgen.net/npm/license/normalize-diacritics

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/normalize-diacritics/badge?version=latest
[downloads-badge]: https://flat.badgen.net/npm/dm/normalize-diacritics
[total-downloads-badge]: https://flat.badgen.net/npm/dt/normalize-diacritics?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/normalize-diacritics
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/normalize-diacritics

[travis-badge]: https://flat.badgen.net/travis/motss/normalize-diacritics/master
[circleci-badge]: https://flat.badgen.net/circleci/github/motss/normalize-diacritics/master
[daviddm-badge]: https://flat.badgen.net/david/dep/motss/normalize-diacritics
[codecov-badge]: https://flat.badgen.net/codecov/c/github/motss/normalize-diacritics?label=codecov
[coveralls-badge]: https://flat.badgen.net/coveralls/c/github/motss/normalize-diacritics?label=coveralls

[codacy-badge]: https://api.codacy.com/project/badge/Grade/c84a41b8422245058a8c1acd17fd7e23
[inch-badge]: http://inch-ci.org/github/motss/normalize-diacritics.svg?branch=master
[codebeat-badge]: https://codebeat.co/badges/8a0eb7c1-b944-41b1-ad87-5f0bd392873b
[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
[version-url]: https://www.npmjs.com/package/normalize-diacritics
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: https://github.com/motss/normalize-diacritics/blob/master/LICENSE

[jsdelivr-url]: https://www.jsdelivr.com/package/npm/normalize-diacritics?version=1.0.1
[downloads-url]: http://www.npmtrends.com/normalize-diacritics
[packagephobia-url]: https://packagephobia.now.sh/result?p=normalize-diacritics
[bundlephobia-url]: https://bundlephobia.com/result?p=normalize-diacritics

[travis-url]: https://travis-ci.org/motss/normalize-diacritics
[circleci-url]: https://circleci.com/gh/motss/normalize-diacritics/tree/master
[daviddm-url]: https://david-dm.org/motss/normalize-diacritics
[codecov-url]: https://codecov.io/gh/motss/normalize-diacritics
[coveralls-url]: https://coveralls.io/github/motss/normalize-diacritics?branch=master

[codebeat-url]: https://codebeat.co/projects/github-com-motss-normalize-diacritics-master
[codacy-url]: https://www.codacy.com/app/motss/normalize-diacritics?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/normalize-diacritics&amp;utm_campaign=Badge_Grade
[coc-url]: https://github.com/motss/normalize-diacritics/blob/master/CODE_OF_CONDUCT.md

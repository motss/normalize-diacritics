<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">normalize-diacritics</h1>

  <p>Remove accents/ diacritics in string</p>
</div>

<hr />

[![Follow me][follow-me-badge]][follow-me-url]

[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]
[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

[![CircleCI][circleci-badge]][circleci-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![codecov][codecov-badge]][codecov-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[![codebeat badge][codebeat-badge]][codebeat-url]
[![Codacy Badge][codacy-badge]][codacy-url]
[![Code of Conduct][coc-badge]][coc-url]

> Simple [NPM][npm-url] package to remove any accents/ diacritics found in a string.

## Table of contents <!-- omit in toc -->

- [Pre-requisite](#pre-requisite)
- [Install](#install)
- [Usage](#usage)
  - [TypeScript or ES Modules](#typescript-or-es-modules)
  - [Node.js](#nodejs)
  - [Browser](#browser)
    - [ES Modules](#es-modules)
    - [UMD](#umd)
- [Demo](#demo)
- [deno](#deno)
- [API Reference](#api-reference)
  - [normalize([input])](#normalizeinput)
  - [normalizeSync([input])](#normalizesyncinput)
- [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
- [License](#license)

## Pre-requisite

- [Node.js][node-js-url] >= 10.18.1
- [NPM][npm-url] >= 6.13.4 ([NPM][npm-url] comes with [Node.js][node-js-url] so there is no need to install separately.)


## Install

```sh
# Install via NPM
$ npm install --save normalize-diacritics
```

## Usage

### TypeScript or ES Modules

```ts
import { normalize } from 'normalize-diacritics';

/** Assuming top-level await is enabled... */
await normalize('söme stüff with áccènts'); // 'some stuff with accents'
```

### Node.js

```js
const { normalize } = require('normalize-diacritics');

/** Assuming top-level await is enabled... */
await normalize('söme stüff with áccènts'); // 'some stuff with accents'
```

### Browser

#### ES Modules

```html
<script type="module">
  import { normalize } from 'https://unpkg.com/normalize-diacritics@latest/dist/normalize-diacritics.min.js';

  // --snip
</script>
```

#### UMD

```html
<script src="https://unpkg.com/normalize-diacritics@latest/dist/normalize-diacritics.umd.min.js"></script>
<script>
  const { normalize } = window.NormalizeDiacritics;

  // --snip
</script>
```

## Demo
[![Edit normalize-diacritics demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/normalizediacritics-demo-wl7ef?fontsize=14)


## deno

👉  Check out the [deno][] module at [deno_mod/normalize_diacritics][].

## API Reference

### normalize([input])

- `input` <?[string][string-mdn-url]> Optional input string that contains accents/ diacritics.
- returns: <[Promise][promise-mdn-url]<[string][string-mdn-url]>> Promise which resolves with normalized input string.

This method normalizes any accents/ diacritics found in a given input string and output a normalized string as a result.

### normalizeSync([input])

This methods works the same as `normalize([input])` except that this is the synchronous version.

## Contributing

### Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct][coc-url]. By participating in this project you agree to abide by its terms.

## License

[MIT License](http://motss.mit-license.org/) © Rong Sen Ng

<!-- References -->
[node-js-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[typescript-url]: https://github.com/Microsoft/TypeScript
[unpkg-url]: https://unpkg.com/normalize-diacritics@latest/dist/
[deno]: https://github.com/denoland/deno
[deno_mod/normalize_diacritics]: https://github.com/motss/deno_mod/tree/master/normalize_diacritics

<!-- MDN -->
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[html-style-element-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

<!-- Badges -->
  [follow-me-badge]: https://flat.badgen.net/twitter/follow/igarshmyb?icon=twitter

[version-badge]: https://flat.badgen.net/npm/v/normalize-diacritics?icon=npm
[node-version-badge]: https://flat.badgen.net/npm/node/normalize-diacritics
[mit-license-badge]: https://flat.badgen.net/npm/license/normalize-diacritics

[downloads-badge]: https://flat.badgen.net/npm/dm/normalize-diacritics
[total-downloads-badge]: https://flat.badgen.net/npm/dt/normalize-diacritics?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/normalize-diacritics
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/normalize-diacritics

[circleci-badge]: https://flat.badgen.net/circleci/github/motss/normalize-diacritics/master?icon=circleci
[daviddm-badge]: https://flat.badgen.net/david/dep/motss/normalize-diacritics
[codecov-badge]: https://flat.badgen.net/codecov/c/github/motss/normalize-diacritics?label=codecov&icon=codecov
[coveralls-badge]: https://flat.badgen.net/coveralls/c/github/motss/normalize-diacritics?label=coveralls

[codacy-badge]: https://api.codacy.com/project/badge/Grade/c84a41b8422245058a8c1acd17fd7e23
[inch-badge]: http://inch-ci.org/github/motss/normalize-diacritics.svg?branch=master
[codebeat-badge]: https://codebeat.co/badges/8a0eb7c1-b944-41b1-ad87-5f0bd392873b
[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
[follow-me-url]: https://twitter.com/igarshmyb?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/normalize-diacritics

[version-url]: https://www.npmjs.com/package/normalize-diacritics
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: /LICENSE

[downloads-url]: http://www.npmtrends.com/normalize-diacritics
[packagephobia-url]: https://packagephobia.now.sh/result?p=normalize-diacritics
[bundlephobia-url]: https://bundlephobia.com/result?p=normalize-diacritics

[circleci-url]: https://circleci.com/gh/motss/normalize-diacritics/tree/master
[daviddm-url]: https://david-dm.org/motss/normalize-diacritics
[codecov-url]: https://codecov.io/gh/motss/normalize-diacritics
[coveralls-url]: https://coveralls.io/github/motss/normalize-diacritics?branch=master

[codebeat-url]: https://codebeat.co/projects/github-com-motss-normalize-diacritics-master
[codacy-url]: https://www.codacy.com/app/motss/normalize-diacritics?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/normalize-diacritics&amp;utm_campaign=Badge_Grade
[coc-url]: /CODE-OF-CONDUCT.md

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

[![ci][ga-badge]][ga-url]
[![codecov][codecov-badge]][codecov-url]

[![Code of Conduct][coc-badge]][coc-url]

> Simple [NPM][npm-url] package to remove any accents/ diacritics found in a string.

## Table of contents <!-- omit in toc -->

- [Pre-requisite](#pre-requisite)
- [Install](#install)
- [Usage](#usage)
  - [TypeScript or ES Modules](#typescript-or-es-modules)
  - [Browser](#browser)
- [Demo](#demo)
- [deno](#deno)
- [API Reference](#api-reference)
  - [normalize([input])](#normalizeinput)
  - [normalizeSync([input])](#normalizesyncinput)
- [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
- [License](#license)

## Pre-requisite

- [Node.js][node-js-url] >= 14.17.3
- [NPM][npm-url] >= 6.14.13 ([NPM][npm-url] comes with [Node.js][node-js-url] so there is no need to install separately.)
- [ES Modules]


## Install

```sh
# Install via NPM
$ npm i normalize-diacritics
```

## Usage

### TypeScript or ES Modules

```ts
import { normalize } from 'normalize-diacritics';

/** Assuming top-level await is enabled... */
await normalize('söme stüff with áccènts'); // 'some stuff with accents'
```

### Browser

```html
<script type="module">
  import { normalize } from 'https://cdn.skypack.dev/normalize-diacritics@latest';
  
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
[ES Modules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

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

[ga-badge]: https://github.com/motss/normalize-diacritics/actions/workflows/ci.yml/badge.svg
[codecov-badge]: https://flat.badgen.net/codecov/c/github/motss/normalize-diacritics?label=codecov&icon=codecov

[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
[follow-me-url]: https://twitter.com/igarshmyb?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/normalize-diacritics

[version-url]: https://www.npmjs.com/package/normalize-diacritics
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: /LICENSE

[downloads-url]: http://www.npmtrends.com/normalize-diacritics
[packagephobia-url]: https://packagephobia.now.sh/result?p=normalize-diacritics
[bundlephobia-url]: https://bundlephobia.com/result?p=normalize-diacritics

[ga-url]: https://github.com/motss/normalize-diacritics/actions/workflows/ci.yml
[codecov-url]: https://codecov.io/gh/motss/normalize-diacritics

[coc-url]: /code-of-conduct.md

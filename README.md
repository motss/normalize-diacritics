<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">normalize-diacritics</h1>

  <p>Remove accents/ diacritics in string</p>
</div>

<hr />

[![Version][version-badge]][version-url]
[![Deno Version][deno-version-badge]][deno-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![jsDelivr downloads][jsdelivr-badge]][jsdelivr-url]

[![Build Status][travis-badge]][travis-url]

> Simple [deno][deno-url] library to remove any accents/ diacritics found in a string.

## Table of contents

## Pre-requisite

- [deno][deno-url] >= 0.2.6

## Usage

```ts
/** Import from GH via `denopkg` */
import { normalize } from 'https://denopkg.com/motss/normalize-diacritics@v1.0.1-deno/index.ts';
/** Or, import from a CDN such as `jsdelivr` */
// import { normalize } from 'https://cdn.jsdelivr.net/gh/motss/normalize-diacritics@1.0.1-deno/index.ts';

(async () => {
  const str = 'söme stüff with áccènts';

  await normalize(str); // 'some stuff with accents'
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
[deno-url]: https://github.com/denoland/deno

<!-- MDN -->
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[html-style-element-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

<!-- Badges -->
[version-badge]: https://flat.badgen.net/badge/version/v1.0.1-deno/blue?icon=github
[deno-version-badge]: https://flat.badgen.net/badge/deno/v0.2.6/blue?icon=github
[mit-license-badge]: https://flat.badgen.net/npm/license/normalize-diacritics

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/gh/motss/normalize-diacritics/badge

[travis-badge]: https://flat.badgen.net/travis/motss/normalize-diacritics/deno

<!-- Links -->
[version-url]: https://github.com/motss/normalize-diacritics/tree/deno
[deno-version-url]: https://github.com/denoland/deno
[mit-license-url]: https://github.com/motss/normalize-diacritics/blob/deno/LICENSE

[jsdelivr-url]: https://www.jsdelivr.com/package/gh/motss/normalize-diacritics?version=1.0.1-deno

[travis-url]: https://travis-ci.org/motss/normalize-diacritics

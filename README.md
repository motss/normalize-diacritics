<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">normalize-diacritics</h1>

  <p>Remove accents/ diacritics in string</p>
</div>

<hr />

[![Version][version-badge]][version-url]
[![Deno Version][deno-version-badge]][deno-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![CircleCI][circleci-badge]][circleci-url]

> Simple [deno][deno-url] module to remove any accents/ diacritics found in a string.

## Table of contents <!-- omit in toc -->

- [Pre-requisite](#pre-requisite)
- [Usage](#usage)
- [API Reference](#api-reference)
  - [normalize([input])](#normalizeinput)
  - [normalizeSync([input])](#normalizesyncinput)
- [License](#license)

## Pre-requisite

- [deno][deno-url] >= 0.2.6

## Usage

```ts
/** Import from GH via `denopkg` */
import { normalize } from "https://denopkg.com/motss/normalize-diacritics@v1.1.0-deno/mod.ts";

(async () => {
  const str = "söme stüff with áccènts";

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
[version-badge]: https://flat.badgen.net/badge/branch/v1.1.0-deno/blue?icon=github
[deno-version-badge]: https://flat.badgen.net/github/release/denoland/deno/stable?icon=github
[mit-license-badge]: https://flat.badgen.net/npm/license/normalize-diacritics

[circleci-badge]: https://flat.badgen.net/circleci/github/motss/normalize-diacritics/deno?icon=circleci

<!-- Links -->
[version-url]: https://github.com/motss/normalize-diacritics/tree/deno
[deno-version-url]: https://github.com/denoland/deno
[mit-license-url]: https://github.com/motss/normalize-diacritics/blob/deno/LICENSE

[circleci-url]: https://circleci.com/gh/motss/normalize-diacritics/tree/deno

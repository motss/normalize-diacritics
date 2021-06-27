import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { normalize } from '../index.js';

type TestSuccess = [undefined | null | string, string];

const testParams: TestSuccess[] = [
  ['', ''],
  ['Åland Islands', 'Aland Islands'],
  ['Saint Barthélemy', 'Saint Barthelemy'],
  ['Cocos (Keeling) Islands', 'Cocos (Keeling) Islands'],
  [`Côte d'Ivoire`, `Cote d'Ivoire`],
  [`Curaçao`, 'Curacao'],
  [`Réunion`, 'Reunion'],

  // non-accented characters (Latin-1 Supplement)
  [`tromsø`, 'tromso'],
  [`\u00d8`, 'O'],

  // repeated characters
  [`éééé`, 'eeee'],
  [`åååå`, 'aaaa'],
  [`éåéåéåéå`, 'eaeaeaea'],
  [`åéåéåéåé`, 'aeaeaeae'],
];

for (const [input, output] of testParams) {
  test(`normalize ${input}`, async () => {
    const result = await normalize(input);

    assert.is(result, output);
  });
}

test.run();

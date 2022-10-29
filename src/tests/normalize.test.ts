import { describe, expect, it } from 'vitest';

import { normalize } from '..';
import type { TestCase } from './types.js';

describe(normalize.name, () => {
  it.each<TestCase<string, string>>([
    { input: '', output: '' },
    { input: 'Åland Islands', output: 'Aland Islands' },
    { input: 'Saint Barthélemy', output: 'Saint Barthelemy' },
    { input: 'Cocos (Keeling) Islands', output: 'Cocos (Keeling) Islands' },
    { input: `Côte d'Ivoire`, output: `Cote d'Ivoire` },
    { input: `Curaçao`, output: 'Curacao' },
    { input: `Réunion`, output: 'Reunion' },

    // non-accented characters (Latin-1 Supplement)
    { input: `tromsø`, output: 'tromso' },
    { input: `\u00d8`, output: 'O' },

    // repeated characters
    { input: `éééé`, output: 'eeee' },
    { input: `åååå`, output: 'aaaa' },
    { input: `éåéåéåéå`, output: 'eaeaeaea' },
    { input: `åéåéåéåé`, output: 'aeaeaeae' },
  ])('normalize $input', async ({ input, output }) => {
    const result = await normalize(input);

    expect(result).toBe(output);
  });
});

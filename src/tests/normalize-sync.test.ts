import { describe, expect, it } from 'vitest';

import { normalizeSync } from '..';
import type { TestCase } from './types.js';

describe(normalizeSync.name, () => {
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
    { input: `Muße`, output: 'Muse' },

    // repeated characters
    { input: `éééé`, output: 'eeee' },
    { input: `åååå`, output: 'aaaa' },
    { input: `éåéåéåéå`, output: 'eaeaeaea' },
    { input: `åéåéåéåé`, output: 'aeaeaeae' },
  ])('normalize $input', ({ input, output }) => {
    const result = normalizeSync(input);

    expect(result).toBe(output);
  });
});

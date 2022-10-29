import { describe, expect, it } from 'vitest';

import { normalize } from '..';

describe(normalize.name, () => {
  it.each<null | undefined>([
    null,
    undefined,
  ])('throws error when calling normalize(%s)', async (testInput) => {
    try {
      await normalize(testInput);
    } catch (error) {
      expect(error).toEqual(
        new TypeError(`Expected 'input' to be of type string, but received '${testInput}'`)
      );
    }
  });
});

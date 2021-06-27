import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { normalize } from '..';

const formatErrorMessage =
  (s: unknown) => new TypeError(`Expected 'input' to be of type string, but received '${s}'`);

const testParams: (null | undefined)[] = [
  null,
  undefined,
];


for (const a of testParams) {
  test(`normalize ${a}`, async () => {
    try {
      await normalize(a);
    } catch (e) {
      assert.equal(e, formatErrorMessage(a));
    }
  });
}

test.run();

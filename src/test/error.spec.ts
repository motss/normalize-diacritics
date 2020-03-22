import { normalize } from '../index.js';

const formatErrorMessage =
  (s: unknown) => new TypeError(`Expected 'input' to be of type string, but received '${s}'`);

type TestError = [string, undefined | null | string];
test.each<TestError>([
  [`null`, null],
  [`void`, void 0],
])(`normalize(%s)`, async (_, a) => {
  try {
    await normalize(a);
  } catch (e) {
    expect(e).toStrictEqual(formatErrorMessage(a));
  }
});

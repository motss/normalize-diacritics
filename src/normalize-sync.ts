import { diacritics } from './diacritics.js';

export function normalizeSync(input: string): string {
  if ('string' !== typeof(input)) {
    throw new TypeError(`Expected 'input' to be of type string, but received '${input}'`);
  }

  /**
   * NOTE(motss): Due to the fact that this module should do what we expect it to be - normalize
   * accents/ diacritics. However, some characters are not accented such as those from
   * [Latin-1 Supplement](https://bit.ly/2vz1l7m). Also see a relevant
   * [GH issue](https://bit.ly/2JbAmH0).
   *
   * Hence, to match the mental module of the users, `String.prototype.normalize` should not be used
   * as such.
   */
  if (!input.length) return input;

  return input.replace(/(\S)/g, (_, s: string) => {
    /**
     * `lastIndex` will not get reset for each comparison if we are reusing the same RegExp.
     * Here create a new copy of the RegExp instance before calling `.test()`.
     *
     * Issue: {@link https://github.com/motss/normalize-diacritics/issues/112|RegExp lastIndex}
     */
    const normalized = diacritics.find(
      n => new RegExp(n.diacritics).test(s)
    );

    return normalized == null ? s : normalized.letter;
  });
}

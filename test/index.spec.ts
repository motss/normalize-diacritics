import { test, assertEqual } from 'https://deno.land/x/testing/mod.ts';

import { normalize } from '../index.ts';

async function throwsWhenInvalidInput() {
  try {
    await normalize(null);
  } catch (e) {
    const err = new TypeError(`Expected 'input' to be of type string, but received '${null}'`);
    assertEqual(e, err);
  }
}

async function normalizesStrings() {
  try {
    const strs = [
      'Åland Islands',
      'Saint Barthélemy',
      'Cocos (Keeling) Islands',
      'Côte d\'Ivoire',
      'Curaçao',
      'Réunion',
    ];

    assertEqual(await normalize(strs[0]), 'Aland Islands');
    assertEqual(await normalize(strs[1]), 'Saint Barthelemy');
    assertEqual(await normalize(strs[2]), 'Cocos (Keeling) Islands');
    assertEqual(await normalize(strs[3]), 'Cote d\'Ivoire');
    assertEqual(await normalize(strs[4]), 'Curacao');
    assertEqual(await normalize(strs[5]), 'Reunion');
  } catch (e) {
    throw e;
  }
}

async function normalizesStringsWithoutInput() {
  try {
    assertEqual(await normalize(), '');
  } catch (e) {
    throw e;
  }
}

async function normalizesStringsWithoutUsingNativeFunction() {
  const cachedFn = String.prototype.normalize;
  String.prototype.normalize = null;

  try {
    assertEqual(await normalize('Réunion'), 'Reunion');
  } catch (e) {
    throw e;
  } finally {
    String.prototype.normalize = cachedFn;
  }
}

async function returnsOriginalCharacterWhenNoMatchFound() {
  const cachedFilter = Array.prototype.filter;
  const cachedFn = String.prototype.normalize;
  Array.prototype.filter = () => [];
  String.prototype.normalize = null;

  try {
    assertEqual(await normalize('Réunion'), 'Réunion');
  } catch (e) {
    throw e;
  } finally {
    Array.prototype.filter = cachedFilter;
    String.prototype.normalize = cachedFn;
  }
}

Promise.all([
  throwsWhenInvalidInput,
  normalizesStringsWithoutInput,
  normalizesStringsWithoutUsingNativeFunction,
  returnsOriginalCharacterWhenNoMatchFound,
].map(n => test(n)));

/**
 * FIXME: String#normalize is not working on `deno`.
 *
 * Related issue: https://github.com/denoland/deno/issues/627
 */
test(normalizesStrings);

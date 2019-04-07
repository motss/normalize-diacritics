import {
  assertStrictEq,
  assertEquals,
  assertThrowsAsync,
  runTests,
  test
} from "./mod_test.mod.ts";

import { normalize } from "./mod.ts";
import { replaceDiacritics } from "./helpers.ts";

// void async function main() {
//   const d = await normalize(null);
//   console.log(d);
// }();

async function throwsWhenInvalidInput() {
  await assertThrowsAsync(
    async () => (normalize as (s: null) => Promise<void>)(null),
    TypeError,
    `Expected 'input' to be of type string, but received 'null'`
  );
}

async function throwsWhenInputIsUndefined() {
  await assertThrowsAsync(
    async () => (normalize as (s?: string | null) => Promise<void>)(),
    TypeError,
    `Expected 'input' to be of type string, but received 'undefined'`
  );
}

async function normalizesStrings() {
  const strs = [
    "Åland Islands",
    "Saint Barthélemy",
    "Cocos (Keeling) Islands",
    "Côte d'Ivoire",
    "Curaçao",
    "Réunion"
  ];

  assertEquals(await Promise.all(strs.map(async n => normalize(n))), [
    "Aland Islands",
    "Saint Barthelemy",
    "Cocos (Keeling) Islands",
    "Cote d'Ivoire",
    "Curacao",
    "Reunion"
  ]);
}

async function normalizesStringsWithoutUsingNativeFunction() {
  const cachedFn = String.prototype.normalize;
  String.prototype.normalize = null!;

  try {
    assertStrictEq(await normalize("Réunion"), "Reunion");
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
  String.prototype.normalize = null!;

  try {
    assertStrictEq(await normalize("Réunion"), "Réunion");
  } catch (e) {
    throw e;
  } finally {
    Array.prototype.filter = cachedFilter;
    String.prototype.normalize = cachedFn;
  }
}

async function normalizeSingleCharacter() {
  assertStrictEq(await normalize("ô"), "o");
}

async function returnsEmptyStringUnTouched() {
  assertStrictEq(await normalize(""), "");
}

async function useCorrectStringNormalizeFunction() {
  const expected =
    "function" === typeof "".normalize &&
    "aeo" === "áèö".normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      ? "(s) => nativeStringNormalize(s)"
      : "(s) => stringNormalize(s)";
  assertStrictEq(replaceDiacritics().toString(), expected);
}

[
  throwsWhenInvalidInput,
  throwsWhenInputIsUndefined,
  normalizesStrings,
  normalizesStringsWithoutUsingNativeFunction,
  returnsOriginalCharacterWhenNoMatchFound,
  normalizeSingleCharacter,
  returnsEmptyStringUnTouched,
  useCorrectStringNormalizeFunction
].map(n => test(n));

runTests();

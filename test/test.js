// @ts-check

const { test } = require('ava');

const {
  diacritics,
  normalize
} = require('../src');

test('get a list of diacritics', async (t) => {
  await t.truthy(diacritics);
});

test('normalize strings', async (t) => {
  const strs = [
    'Åland Islands',
    'Saint Barthélemy',
    'Cocos (Keeling) Islands',
    'Côte d\'Ivoire',
    'Curaçao',
    'Réunion',
  ];

  await t.is(normalize(strs[0]), 'Aland Islands');
  await t.is(normalize(strs[1]), 'Saint Barthelemy');
  await t.is(normalize(strs[2]), 'Cocos (Keeling) Islands');
  await t.is(normalize(strs[3]), 'Cote d\'Ivoire');
  await t.is(normalize(strs[4]), 'Curacao');
  await t.is(normalize(strs[5]), 'Reunion');
});

test('normalize strings without argument', async (t) => {
  await t.is(normalize(), '');
})

test('normalize strings with invalid argument type', async (t) => {
  const err = await t.throws(() => normalize(11111), TypeError);

  await t.is(err.message, 'Invalid type number. Only value of type String is allowed');
});

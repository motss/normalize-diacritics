// @ts-check
import test from 'ava';

/** Setting up */
const {
  diacritics,
  normalize,
} = require('../');

test('get a list of diacritics', async (t) => {
  t.truthy(diacritics);
});

test('normalize strings', async (t) => {
  try {
    const strs = [
      'Åland Islands',
      'Saint Barthélemy',
      'Cocos (Keeling) Islands',
      'Côte d\'Ivoire',
      'Curaçao',
      'Réunion',
    ];

    t.is(await normalize(strs[0]), 'Aland Islands');
    t.is(await normalize(strs[1]), 'Saint Barthelemy');
    t.is(await normalize(strs[2]), 'Cocos (Keeling) Islands');
    t.is(await normalize(strs[3]), 'Cote d\'Ivoire');
    t.is(await normalize(strs[4]), 'Curacao');
    t.is(await normalize(strs[5]), 'Reunion');
  } catch (e) {
    t.fail(e);
  }
});

test('normalize strings without argument', async (t) => {
  try {
    t.is(await normalize(), '');
  } catch (e) {
    t.fail(e);
  }
})

test('normalize strings with invalid argument type', async (t) => {
  try {
    await normalize(11111);

    t.fail();
  } catch (e) {
    t.true(e instanceof TypeError);
    t.is(e.message, 'input is not a string');
  }
});

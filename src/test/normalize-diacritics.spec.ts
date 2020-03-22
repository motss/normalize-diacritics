import { normalize } from '../index.js';

type TestSuccess = [string, undefined | null | string, string];
test.each<TestSuccess>([
  [`''`, '', ''],
  [`'Åland Islands'`, 'Åland Islands', 'Aland Islands'],
  [`'Saint Barthélemy'`, 'Saint Barthélemy', 'Saint Barthelemy'],
  [`'Cocos (Keeling) Islands'`, 'Cocos (Keeling) Islands', 'Cocos (Keeling) Islands'],
  [`'Côte d'Ivoire'`, `Côte d'Ivoire`, `Cote d'Ivoire`],
  [`'Curaçao'`, `Curaçao`, 'Curacao'],
  [`'Réunion'`, `Réunion`, 'Reunion'],

  // non-accented characters (Latin-1 Supplement)
  [`'tromsø'`, `tromsø`, 'tromso'],
  [`'\u00d8'`, `\u00d8`, 'O'],

  // repeated characters
  [`'éééé'`, `éééé`, 'eeee'],
  [`'åååå'`, `åååå`, 'aaaa'],
  [`'éåéåéåéå'`, `éåéåéåéå`, 'eaeaeaea'],
  [`'åéåéåéåé'`, `åéåéåéåé`, 'aeaeaeae'],
])(`normalize(%s)`, async (_, a, expected) => {
  const d = await normalize(a);

  expect(d).toStrictEqual(expected);
});

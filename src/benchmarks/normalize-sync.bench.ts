import { bench, describe } from 'vitest';

import { normalizeSync } from '..';

describe(normalizeSync.name, () => {
  bench('empty string', () => {
    normalizeSync('');
  });

  bench('Åland Islands', () => {
    normalizeSync('Åland Islands');
  });

  bench('Saint Barthélemy', () => {
    normalizeSync('Saint Barthélemy');
  });

  bench('Cocos (Keeling) Islands', () => {
    normalizeSync('Cocos (Keeling) Islands');
  });

  bench(`Côte d'Ivoire`, () => {
    normalizeSync(`Côte d'Ivoire`);
  });

  bench(`Curaçao`, () => {
    normalizeSync(`Curaçao`);
  });

  bench(`Réunion`, () => {
    normalizeSync(`Réunion`);
  });

  bench(`tromsø`, () => {
    normalizeSync(`tromsø`);
  });

  bench(`\u00d8`, () => {
    normalizeSync(`\u00d8`);
  });

  bench(`éééé`, () => {
    normalizeSync(`éééé`);
  });

  bench(`åååå`, () => {
    normalizeSync(`åååå`);
  });

  bench(`éåéåéåéå`, () => {
    normalizeSync(`éåéåéåéå`);
  });

  bench(`åéåéåéåé`, () => {
    normalizeSync(`åéåéåéåé`);
  });

});

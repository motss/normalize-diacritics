import { bench, describe } from 'vitest';

import { normalize } from '..';

describe(normalize.name, () => {
  bench('<empty_string>', async () => {
    await normalize('');
  });

  bench('Åland Islands', async () => {
    await normalize('Åland Islands');
  });

  bench('Saint Barthélemy', async () => {
    await normalize('Saint Barthélemy');
  });

  bench('Cocos (Keeling) Islands', async () => {
    await normalize('Cocos (Keeling) Islands');
  });

  bench(`Côte d'Ivoire`, async () => {
    await normalize(`Côte d'Ivoire`);
  });

  bench(`Curaçao`, async () => {
    await normalize(`Curaçao`);
  });

  bench(`Réunion`, async () => {
    await normalize(`Réunion`);
  });

  bench(`tromsø`, async () => {
    await normalize(`tromsø`);
  });

  bench(`\u00d8`, async () => {
    await normalize(`\u00d8`);
  });

  bench(`éééé`, async () => {
    await normalize(`éééé`);
  });

  bench(`åååå`, async () => {
    await normalize(`åååå`);
  });

  bench(`éåéåéåéå`, async () => {
    await normalize(`éåéåéåéå`);
  });

  bench(`åéåéåéåé`, async () => {
    await normalize(`åéåéåéåé`);
  });

});

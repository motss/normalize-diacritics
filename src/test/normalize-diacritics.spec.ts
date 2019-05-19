import { normalize } from '../normalize-diacritics.js';

describe('normalize-diacritics', () => {
  describe('error', () => {
    it(`throws when invalid input`, async () => {
      try {
        await normalize(null);
      } catch (e) {
        expect(e).toStrictEqual(
          new TypeError(`Expected 'input' to be of type string, but received 'null'`));
      }
    });

    it(`throws when 'input' is 'undefined'`, async () => {
      try {
        await normalize();
      } catch (e) {
        expect(e).toStrictEqual(
          new TypeError(`Expected 'input' to be of type string, but received 'undefined'`));
      }
    });

  });

  describe('ok', () => {
    it(`skips normalization for empty character`, async () => {
      expect(await normalize('')).toStrictEqual('');
    });

    it('normalizes accented characters', async () => {
      try {
        const strs = [
          'Åland Islands',
          'Saint Barthélemy',
          'Cocos (Keeling) Islands',
          `Côte d'Ivoire`,
          'Curaçao',
          'Réunion',
        ];

        expect(await normalize(strs[0])).toStrictEqual('Aland Islands');
        expect(await normalize(strs[1])).toStrictEqual('Saint Barthelemy');
        expect(await normalize(strs[2])).toStrictEqual('Cocos (Keeling) Islands');
        expect(await normalize(strs[3])).toStrictEqual(`Cote d'Ivoire`);
        expect(await normalize(strs[4])).toStrictEqual('Curacao');
        expect(await normalize(strs[5])).toStrictEqual('Reunion');
      } catch (e) {
        throw e;
      }
    });

    it('normalizes accented characters without using native function', async () => {
      const cachedFn = String.prototype.normalize;
      String.prototype.normalize = null!;

      try {
        expect(await normalize('Réunion')).toStrictEqual('Reunion');
      } catch (e) {
        throw e;
      } finally {
        String.prototype.normalize = cachedFn;
      }
    });

    it(`normalizes non-accented characters (Latin-1 Supplement)`, async () => {
      expect(await normalize('tromsø')).toStrictEqual('tromso');
      expect(await normalize('\u00d8')).toStrictEqual('O');
    });

  });

});

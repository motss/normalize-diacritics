import { normalize } from '../';

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

    it(`throws error in 'replaceDiacritics'`, async () => {
      const cachedFn = String.prototype.normalize;
      String.prototype.normalize = () => { throw new Error('String#normalize is broken'); }

      try {
        await normalize('Réunion');
      } catch (e) {
        expect(e).toStrictEqual(new Error('String#normalize is broken'));
      } finally {
        String.prototype.normalize = cachedFn;
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
    it('normalizes strings', async () => {
      try {
        const strs = [
          'Åland Islands',
          'Saint Barthélemy',
          'Cocos (Keeling) Islands',
          'Côte d\'Ivoire',
          'Curaçao',
          'Réunion',
        ];

        expect(await normalize(strs[0])).toStrictEqual('Aland Islands');
        expect(await normalize(strs[1])).toStrictEqual('Saint Barthelemy');
        expect(await normalize(strs[2])).toStrictEqual('Cocos (Keeling) Islands');
        expect(await normalize(strs[3])).toStrictEqual('Cote d\'Ivoire');
        expect(await normalize(strs[4])).toStrictEqual('Curacao');
        expect(await normalize(strs[5])).toStrictEqual('Reunion');
      } catch (e) {
        throw e;
      }
    });

    it('normalizes string without using native function', async () => {
      const cachedFn = String.prototype.normalize;
      String.prototype.normalize = null;

      try {
        expect(await normalize('Réunion')).toStrictEqual('Reunion');
      } catch (e) {
        throw e;
      } finally {
        String.prototype.normalize = cachedFn;
      }
    });

    it('returns original character when no match found', async () => {
      const cachedFilter = Array.prototype.filter;
      const cachedFn = String.prototype.normalize;
      Array.prototype.filter = () => [];
      String.prototype.normalize = null;

      try {
        expect(await normalize('Réunion')).toStrictEqual('Réunion');
      } catch (e) {
        throw e;
      } finally {
        Array.prototype.filter = cachedFilter;
        String.prototype.normalize = cachedFn;
      }
    });

    it('normalizes single-character string', async () => {
      try {
        expect(await normalize('ô')).toStrictEqual('o');
      } catch (e) {
        throw e;
      }
    });

  });

});

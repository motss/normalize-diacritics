import { replaceDiacritics } from "./helpers.ts";

export function normalizeSync(input?: string | null): string | void {
  if ("string" !== typeof input) {
    throw new TypeError(
      `Expected 'input' to be of type string, but received '${input}'`
    );
  }

  const fn = replaceDiacritics();

  return !input.length
    ? input
    : input.replace(/(\S)/g, (_, p: string) => fn(p));
}

export async function normalize(input?: string | null): Promise<string | void> {
  return normalizeSync(input);
}

export { Diacritics, diacritics } from "./helpers.ts";
export default normalize;

import { normalizeSync } from './normalize-sync.js';

export async function normalize(input: string): Promise<string> {
  return normalizeSync(input);
}

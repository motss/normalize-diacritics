import { normalizeSync } from './normalize-sync.js';

export async function normalize(input?: string | null): Promise<string> {
  return normalizeSync(input);
}

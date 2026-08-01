import type { Locale } from '@/lib/i18n/config';

export async function getContent<T = unknown>(
  locale: Locale,
  file: string,
): Promise<T> {
  const mod = await import(`@/lib/content/${locale}/${file}.json`);
  return mod.default as T;
}

export const locales = ['ca', 'in'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ca';

export const localeMeta: Record<
  Locale,
  { label: string; country: string; hreflang: string }
> = {
  ca: { label: 'Canada', country: 'CA', hreflang: 'en-CA' },
  in: { label: 'India', country: 'IN', hreflang: 'en-IN' },
};

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

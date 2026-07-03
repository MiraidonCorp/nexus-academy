'use client';

import Link, { type LinkProps } from 'next/link';
import { trackButtonClick } from '@/lib/analytics';

interface TrackedLinkProps extends LinkProps {
  label: string;
  location: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Wraps next/link with click tracking. Needed because Server Component pages
 * (home, about, contact) can't pass onClick handlers directly to Link.
 */
export default function TrackedLink({ label, location, href, ...rest }: TrackedLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => trackButtonClick({ label, location, href: href.toString() })}
      {...rest}
    />
  );
}

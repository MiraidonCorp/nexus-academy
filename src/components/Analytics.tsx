'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView, trackUserType, type UserType } from '@/lib/analytics';

function readUserType(): UserType {
  try {
    const stored = localStorage.getItem('nexus_auth');
    return stored && JSON.parse(stored).loggedIn === true ? 'member' : 'anonymous';
  } catch {
    return 'anonymous';
  }
}

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    trackPageView(query ? `${pathname}?${query}` : pathname);
  }, [pathname, searchParams]);

  return null;
}

function UserTypeTracker() {
  useEffect(() => {
    const push = () => trackUserType(readUserType());
    push();
    window.addEventListener('nexus-auth-change', push);
    window.addEventListener('storage', push);
    return () => {
      window.removeEventListener('nexus-auth-change', push);
      window.removeEventListener('storage', push);
    };
  }, []);

  return null;
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <PageViewTracker />
      <UserTypeTracker />
    </Suspense>
  );
}

'use client';

import NavigationItem from '@/components/layout/navigation-item';
import { Home, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';

const NAVIGATION_ITEMS = [
  { href: '/', icon: <Home /> },
  { href: '/friends', icon: <Users /> }
] as const;

export default function MainNavigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex gap-1 justify-center items-center">
      {NAVIGATION_ITEMS.map((item) => (
        <NavigationItem
          key={item.href}
          href={item.href}
          icon={item.icon}
          isActive={
            pathname !== '/'
              ? pathname === item.href
              : pathname.startsWith(item.href)
          }
        />
      ))}
    </div>
  );
}

'use client';

import FriendNavigationItem from '@/components/features/friend/friend-navigation-item';
import { UserCheck, UserPlus, Users, UserX } from 'lucide-react';
import { usePathname } from 'next/navigation';

const FRIEND_NAV_ITEMS = [
  {
    icon: Users,
    label: 'All Friends',
    href: '/friends'
  },
  {
    icon: UserCheck,
    label: 'Friend Request',
    href: '/friends/requests/received'
  },
  {
    icon: UserX,
    label: 'Sent Requests',
    href: '/friends/requests/sent'
  },
  {
    icon: UserPlus,
    label: 'Find People',
    href: '/friends/find'
  }
];

export default function FriendSidebar() {
  const pathname = usePathname();
  return (
    <aside className="bg-background w-90 fixed top-14 left-0 h-[calc(100vh-3.5rem)] p-3 shadow overflow-y-auto">
      {/* Sidabar header  */}
      <h1 className="px-2 font-bold text-2xl py-3">Friends</h1>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {FRIEND_NAV_ITEMS.map((item) => (
          <FriendNavigationItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            active={pathname === item.href}
          />
        ))}
      </nav>
    </aside>
  );
}

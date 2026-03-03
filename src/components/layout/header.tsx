import MainNavigation from '@/components/layout/main-navigation';
import UserDropdown from '@/components/layout/user-dropdown';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background shadow grid grid-cols-3 items-center h-14 fixed top-0 left-0 right-0 z-50 px-4">
      {/* Fakebuck logo */}
      <Link href="/" className="size-10 relative">
        <Image alt="Fakebuck" src="/logo.png" fill />
      </Link>

      {/* Main navigation */}
      <MainNavigation />

      <div className="justify-self-end">
        <UserDropdown />
      </div>
    </header>
  );
}

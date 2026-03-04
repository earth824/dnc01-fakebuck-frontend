import { cn } from '@/lib/utils';
import { LucideProps, Users } from 'lucide-react';
import Link from 'next/link';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

type FriendNavigationItemProps = {
  label: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  active?: boolean;
};

export default function FriendNavigationItem({
  label,
  href,
  icon: Icon,
  active = false
}: FriendNavigationItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-4 px-3 py-2 rounded-lg',
        active ? 'text-primary' : 'hover:bg-muted'
      )}
    >
      <div
        className={cn(
          'size-9 rounded-full flex items-center justify-center',
          active ? 'bg-primary/20' : 'bg-muted-foreground/30'
        )}
      >
        <Icon className="size-5" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}

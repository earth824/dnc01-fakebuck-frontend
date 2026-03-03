import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { logout } from '@/lib/actions/auth.action';
import { auth } from '@/lib/auth/auth';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

export default async function UserDropdown() {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        <Avatar className="size-10">
          <AvatarImage
            alt="user"
            src={session?.user?.avatarUrl ?? '/user.png'}
          />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72 p-2">
        <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
          <Link href="/profile">
            <Avatar className="size-9">
              <AvatarImage
                alt="user"
                src={session?.user?.avatarUrl ?? '/user.png'}
              />
            </Avatar>
            <div>
              <h2 className="text-sm font-semibold">
                {session?.user?.firstName} {session?.user?.lastName}
              </h2>
              <p className="text-xs text-muted-foreground">See your profile</p>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
          <button className="flex gap-2 items-center w-full" onClick={logout}>
            <div className="bg-muted size-9 flex justify-center items-center rounded-full">
              <LogOut />
            </div>
            <span className="font-semibold">Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

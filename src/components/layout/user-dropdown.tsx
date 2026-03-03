import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

export default function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        <Avatar className="size-10">
          <AvatarImage alt="user" src="/user.png" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72 p-2">
        <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
          <Link href="/profile">
            <Avatar className="size-9">
              <AvatarImage alt="user" src="/user.png" />
            </Avatar>
            <div>
              <h2 className="text-sm font-semibold">John Doe</h2>
              <p className="text-xs text-muted-foreground">See your profile</p>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
          <button className="flex gap-2 items-center w-full">
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

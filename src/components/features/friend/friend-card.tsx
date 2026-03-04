import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function FriendCard() {
  return (
    <div className="bg-background rounded-xl border shadow-sm w-full max-w-60 overflow-hidden">
      {/* Profile image */}
      <div className="relative aspect-square w-full">
        <Image src="/user.png" alt="user" fill className="object-cover" />
      </div>

      {/* Info + Action */}
      <div className="p-3">
        <p className="text-sm font-semibold truncate">Jack Daniel</p>
        <div className="flex flex-col gap-2 pt-3">
          <Button>Add friend</Button>
        </div>
      </div>
    </div>
  );
}

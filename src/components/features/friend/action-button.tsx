'use client';

import { ActionButtonProps } from '@/components/features/friend/friend.type';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
import { useTransition } from 'react';

export default function ActionButton({
  children,
  variant = 'default',
  onClickAction,
  targetUserId
}: ActionButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await onClickAction(targetUserId);
    });
  };

  return (
    <Button
      className="font-semibold"
      variant={variant}
      onClick={handleClick}
      disabled={isPending}
    >
      {isPending ? <Loader className="animate-spin" /> : children}
    </Button>
  );
}

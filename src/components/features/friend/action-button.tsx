import { ActionButtonProps } from '@/components/features/friend/friend.type';
import { Button } from '@/components/ui/button';

export default function ActionButton({
  children,
  variant = 'default'
}: ActionButtonProps) {
  return (
    <Button className="font-semibold" variant={variant}>
      {/* <Check  /> */}
      {children}
    </Button>
  );
}

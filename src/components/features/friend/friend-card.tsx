import ActionButton from '@/components/features/friend/action-button';
import { FRIEND_ACTION_MAP } from '@/components/features/friend/friend.constant';
import { RelationshipStatus, User } from '@/lib/api/user/user.type';
import Image from 'next/image';

type FriendCardProps = User & {
  relationshipStatus: Exclude<RelationshipStatus, 'SELF'>;
};

export default function FriendCard({
  id,
  firstName,
  lastName,
  avatarUrl,
  relationshipStatus
}: FriendCardProps) {
  const { confirm, cancel } = FRIEND_ACTION_MAP[relationshipStatus];

  return (
    <div className="bg-background rounded-xl border shadow-sm w-full max-w-60 overflow-hidden">
      {/* Profile image */}
      <div className="relative aspect-square w-full">
        <Image
          src={avatarUrl ?? '/user.png'}
          alt="user"
          fill
          className="object-cover"
        />
      </div>

      {/* Info + Action */}
      <div className="p-3">
        <p className="text-sm font-semibold truncate">
          {firstName} {lastName}
        </p>
        <div className="flex flex-col gap-2 pt-3">
          {confirm && (
            <ActionButton
              variant={confirm.variant}
              onClickAction={confirm.onClickAction}
              targetUserId={id}
            >
              {confirm.children}
            </ActionButton>
          )}
          {cancel && (
            <ActionButton
              variant={cancel.variant}
              onClickAction={cancel.onClickAction}
              targetUserId={id}
            >
              {cancel.children}
            </ActionButton>
          )}
        </div>
      </div>
    </div>
  );
}

import ActionButton from '@/components/features/friend/action-button';
import { FRIEND_ACTION_MAP } from '@/components/features/friend/friend.constant';
import { RelationshipStatus } from '@/lib/api/user/user.type';

type ProfileActionProps = {
  relationshipStatus: RelationshipStatus;
  targetUserId: string;
};

export default function ProfileAction({
  relationshipStatus,
  targetUserId
}: ProfileActionProps) {
  if (relationshipStatus === 'SELF') return null;

  const { confirm, cancel } = FRIEND_ACTION_MAP[relationshipStatus];

  return (
    <div className="flex items-center gap-2 pb-2">
      {confirm && (
        <ActionButton
          variant={confirm.variant}
          onClickAction={confirm.onClickAction}
          targetUserId={targetUserId}
        >
          {confirm.children}
        </ActionButton>
      )}
      {cancel && (
        <ActionButton
          variant={cancel.variant}
          onClickAction={cancel.onClickAction}
          targetUserId={targetUserId}
        >
          {cancel.children}
        </ActionButton>
      )}
    </div>
  );
}

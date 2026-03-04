import FriendCard from '@/components/features/friend/friend-card';
import { RelationshipStatus, User } from '@/lib/api/user/user.type';

type FriendListProps = {
  users: User[];
  relationshipStatus: Exclude<RelationshipStatus, 'SELF'>;
};

export default function FriendList({
  users,
  relationshipStatus
}: FriendListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-2">
      {users.map((el) => (
        <FriendCard
          key={el.id}
          {...el}
          relationshipStatus={relationshipStatus}
        />
      ))}
    </div>
  );
}

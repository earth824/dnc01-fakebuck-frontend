import FriendCard from '@/components/features/friend/friend-card';
import { User } from '@/lib/api/user/user.type';

type FriendListProps = {
  users: User[];
};

export default function FriendList({ users }: FriendListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-2">
      {users.map((el) => (
        <FriendCard key={el.id} />
      ))}
    </div>
  );
}

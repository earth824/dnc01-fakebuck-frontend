import FriendList from '@/components/features/friend/friend-list';
import { friendService } from '@/lib/api/friend/friend.service';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request Sent'
};

export default async function RequestSentPage() {
  const outgoingUsers = await friendService.getOutgoingRequest();
  return (
    <div className="p-8">
      <div className="mb-4">
        <h2 className="font-bold text-xl">Friends</h2>
      </div>
      {/* FriendList */}
      <FriendList users={outgoingUsers} relationshipStatus="REQUEST_SENT" />
    </div>
  );
}

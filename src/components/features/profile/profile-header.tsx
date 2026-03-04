import FriendInfo from '@/components/features/profile/friend-info';
import ProfileAction from '@/components/features/profile/profile-action';
import ProfileAvatar from '@/components/features/profile/profile-avatar';
import ProfileCover from '@/components/features/profile/profile-cover';
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage
} from '@/components/ui/avatar';

import { RelationshipStatus, UserWithFriends } from '@/lib/api/user/user.type';

type ProfileHeaderProps = {
  user: UserWithFriends;
  relationshipStatus: RelationshipStatus;
};

export default function ProfileHeader({
  user,
  relationshipStatus
}: ProfileHeaderProps) {
  return (
    <div className="shadow bg-background">
      {/* Cover photo */}
      <ProfileCover
        coverUrl={user.coverUrl}
        canEdit={relationshipStatus === 'SELF'}
      />

      {/* Info bar */}
      <div className="max-w-260 mx-auto my-7 px-4">
        <div className="flex items-end justify-between pb-3">
          {/* Left: Avatar + Name */}
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <ProfileAvatar
              avatarUrl={user.avatarUrl}
              canEdit={relationshipStatus === 'SELF'}
            />

            {/* Name + friends */}
            <div className="">
              <h1 className="text-3xl font-bold">
                {user.firstName} {user.lastName}
              </h1>
              <FriendInfo friends={user.friends} />
            </div>
          </div>

          {/* Right: Action buttons */}
          <ProfileAction
            relationshipStatus={relationshipStatus}
            targetUserId={user.id}
          />
        </div>
      </div>
    </div>
  );
}

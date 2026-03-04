import ProfileHeader from '@/components/features/profile/profile-header';
import { userService } from '@/lib/api/user/user.service';
import { getCurrentUser } from '@/lib/auth/session';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile'
};

export default async function ProfilePage(
  props: PageProps<'/profile/[[...targetUserId]]'>
) {
  const params = await props.params;
  const currentUser = await getCurrentUser();

  const targetUserId = params.targetUserId
    ? params.targetUserId[0]
    : currentUser.id;

  const targetUser = await userService.getUserProfile(targetUserId);
  console.log(targetUser);

  return (
    <div>
      <ProfileHeader {...targetUser} />
    </div>
  );
}

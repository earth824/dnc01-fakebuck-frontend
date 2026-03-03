import ProfileHeader from '@/components/features/profile/profile-header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile'
};

export default function ProfilePage() {
  return (
    <div>
      <ProfileHeader />
    </div>
  );
}

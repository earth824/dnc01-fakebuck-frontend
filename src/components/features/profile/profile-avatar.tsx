import ImageUploadDialog from '@/components/features/profile/image-upload-dialog';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { uploadAvatar } from '@/lib/actions/user.action';
import { Camera } from 'lucide-react';

type ProfileAvatarProps = {
  avatarUrl: string | null;
  canEdit?: boolean;
};

export default function ProfileAvatar({
  avatarUrl,
  canEdit
}: ProfileAvatarProps) {
  return (
    <div className="relative">
      <Avatar className="size-42 border">
        <AvatarImage src={avatarUrl ?? '/user.png'} alt="John Doe" />
      </Avatar>
      {canEdit && (
        <ImageUploadDialog
          trigger={
            <Button
              variant="outline"
              className="absolute bottom-3 right-2 size-9 rounded-full shadow"
            >
              <Camera className="w-4 h-4" />
            </Button>
          }
          initialUrl={avatarUrl}
          title="Edit avatar"
          onUpload={uploadAvatar}
        />
      )}
    </div>
  );
}

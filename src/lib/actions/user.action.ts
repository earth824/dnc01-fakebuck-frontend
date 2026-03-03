'use server';

import { ActionResult } from '@/lib/actions/action.type';
import { formatActionError } from '@/lib/actions/action.util';
import { userService } from '@/lib/api/user/user.service';
import { unstable_update } from '@/lib/auth/auth';

export const uploadCover = async (file: File): Promise<ActionResult> => {
  const formData = new FormData();
  formData.append('cover', file);
  try {
    await userService.uploadCover(formData);
    return { success: true };
  } catch (error) {
    return formatActionError(error);
  }
};

export const uploadAvatar = async (file: File): Promise<ActionResult> => {
  const formData = new FormData();
  formData.append('avatar', file);
  try {
    const avatarUrl = await userService.uploadAvatar(formData);
    await unstable_update({ user: { avatarUrl } });
    return { success: true };
  } catch (error) {
    return formatActionError(error);
  }
};

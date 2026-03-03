'use server';

import { ActionResult } from '@/lib/actions/action.type';
import { formatActionError } from '@/lib/actions/action.util';
import { userService } from '@/lib/api/user/user.service';

export const uploadCover = async (file: File): Promise<ActionResult> => {
  const formData = new FormData();
  formData.append('cover', file);
  try {
    const result = await userService.uploadCover(formData);
    console.log('UPLOAD RESULT: ', result);
    return { success: true };
  } catch (error) {
    console.log(error);
    return formatActionError(error);
  }
};

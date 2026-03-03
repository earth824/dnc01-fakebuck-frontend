import { api } from '@/lib/api/client';

const uploadCover = (input: FormData) =>
  api.patch<string>('/users/me/cover', input);

export const userService = { uploadCover };

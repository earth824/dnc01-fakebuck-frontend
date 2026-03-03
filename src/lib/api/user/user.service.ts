import { api } from '@/lib/api/client';
import { GetUserProfileResponse } from '@/lib/api/user/user.type';

const uploadCover = (input: FormData) =>
  api.patch<string>('/users/me/cover', input);

const uploadAvatar = (input: FormData) =>
  api.patch<string>('/users/me/avatar', input);

const getUserProfile = (targetUserId: string) =>
  api.get<GetUserProfileResponse>(`/users/${targetUserId}/profile`);

export const userService = { uploadCover, getUserProfile, uploadAvatar };

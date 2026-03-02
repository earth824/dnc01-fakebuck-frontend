import { api } from '@/lib/api/client';
import { User } from '@/lib/api/user/user.type';
import { RegisterInput } from '@/lib/schemas/auth.schema';

const register = (input: RegisterInput) =>
  api.post<void>('/auth/register', input);

const login = (input: unknown) =>
  api.post<{ accessToken: string; user: User }>('/auth/login', input);

export const authService = { register, login };

import { api } from '@/lib/api/client';
import { RegisterInput } from '@/lib/schemas/auth.schema';

const register = (input: RegisterInput) =>
  api.post<void>('/auth/register', input);

export const authService = { register };

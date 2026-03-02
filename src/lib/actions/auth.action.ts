'use server';

import { ActionResult } from '@/lib/actions/action.type';
import { formatActionError } from '@/lib/actions/action.util';
import { authService } from '@/lib/api/auth/auth.service';
import { LoginInput, RegisterInput } from '@/lib/schemas/auth.schema';
import { redirect } from 'next/navigation';

export const register = async (input: RegisterInput): Promise<ActionResult> => {
  try {
    await authService.register(input);
  } catch (error) {
    return formatActionError(error);
  }
  redirect('/login');
};

export const login = async (input: LoginInput) => {};

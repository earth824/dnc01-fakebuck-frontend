'use server';

import { ActionResult } from '@/lib/actions/action.type';
import { LoginInput, RegisterInput } from '@/lib/schemas/auth.schema';

export const register = async (input: RegisterInput): Promise<ActionResult> => {
  apiFetch('/auth/register', { method: 'POST', body: input });
};

export const login = async (input: LoginInput) => {
  const res = await fetch('http://localhost:8000/auth/login', {
    method: 'POST',
    body: JSON.stringify(input),
    headers: {
      'Content-type': 'application/json'
    }
  });

  if (!res.ok) {
    // handle error
    const error = await res.json();
  } else {
    const result = await res.json();
  }
};

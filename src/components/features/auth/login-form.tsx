'use client';

import { Button } from '@/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { LoginInput, loginSchema } from '@/lib/schemas/auth.schema';
import { simLoading } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useTransition } from 'react';
import { Controller, useForm } from 'react-hook-form';

export default function LogInForm() {
  const { handleSubmit, control } = useForm<LoginInput>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(loginSchema)
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: LoginInput) => {
    startTransition(async () => {
      await simLoading();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup className="gap-4">
        {/* Email */}
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                placeholder="Email"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Password */}
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <Input
                {...field}
                id={field.name}
                placeholder="Password"
                aria-invalid={fieldState.invalid}
                type="password"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Submit button */}
        <Field className="mt-4">
          <Button className="rounded-full" disabled={isPending}>
            {isPending ? (
              <>
                <Loader className="animate-spin" /> Logging you in ...
              </>
            ) : (
              'Login'
            )}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}

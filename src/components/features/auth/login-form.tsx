import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function LogInForm() {
  return (
    <form>
      <FieldGroup className="gap-4">
        {/* Email */}
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input placeholder="Email" />
        </Field>

        {/* Password */}
        <Field>
          <FieldLabel>Password</FieldLabel>
          <Input placeholder="Password" type="password" />
        </Field>

        {/* Submit button */}
        <Field className="mt-4">
          <Button className="rounded-full">Login</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}

import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function RegisterForm() {
  return (
    <form>
      <FieldGroup>
        <div className="grid grid-cols-2 gap-2">
          {/* First name */}
          <Field>
            <FieldLabel>First Name</FieldLabel>
            <Input placeholder="First Name" />
          </Field>

          {/* Last name */}
          <Field>
            <FieldLabel>Last Name</FieldLabel>
            <Input placeholder="Last Name" />
          </Field>
        </div>

        {/* Date of birth */}
        <Field>
          <FieldLabel>Date of birth</FieldLabel>
          <Input placeholder="First Name" type="date" />
        </Field>
      </FieldGroup>
    </form>
  );
}

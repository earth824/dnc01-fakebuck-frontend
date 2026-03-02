import DatePickerInput from '@/components/shared/date-picker-input';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export default function RegisterForm() {
  return (
    <form>
      <FieldGroup className="gap-4">
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
          <DatePickerInput />
        </Field>

        {/* Gender */}
        <Field>
          <FieldLabel>Gender</FieldLabel>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FEMALE">Female</SelectItem>
              <SelectItem value="MALE">Male</SelectItem>
              <SelectItem value="OTHER">Other</SelectItem>
            </SelectContent>
          </Select>
        </Field>

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
        <Field>
          <Button className="rounded-full">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}

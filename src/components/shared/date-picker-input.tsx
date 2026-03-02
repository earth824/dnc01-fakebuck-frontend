'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { useState } from 'react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

type DatePickerInputProps = {
  id: string;
  isValid: boolean;
  value: Date;
  onValueChange: (...event: unknown[]) => void;
};

export default function DatePickerInput({
  id,
  isValid,
  value,
  onValueChange
}: DatePickerInputProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'justify-start px-3 font-normal',
            !isValid && 'border-destructive'
          )}
          id={id}
        >
          {value ? (
            format(value, 'dd MMMM yyyy')
          ) : (
            <span className="text-muted-foreground">Select date of birth</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-1">
        <Calendar
          mode="single"
          captionLayout="dropdown"
          selected={value}
          onSelect={(date) => {
            onValueChange(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

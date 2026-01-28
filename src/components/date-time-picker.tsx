import * as React from "react";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Clock } from "lucide-react";

interface DateTimePickerProps {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  label?: string;
  placeholder?: string;
}

export function DateTimePicker({
  value,
  onChange,
  label = "Time",
  placeholder = "Pick a date",
}: DateTimePickerProps) {
  const [selectedDateTime, setSelectedDateTime] = React.useState<
    Date | undefined
  >(value);

  React.useEffect(() => {
    if (value) {
      setSelectedDateTime(value);
    }
  }, [value]);

  const handleSelectDate = (date: Date | undefined) => {
    if (!date) return;

    const newDateTime = selectedDateTime
      ? new Date(selectedDateTime)
      : new Date();
    newDateTime.setFullYear(date.getFullYear());
    newDateTime.setMonth(date.getMonth());
    newDateTime.setDate(date.getDate());

    if (!selectedDateTime) {
      newDateTime.setHours(new Date().getHours());
      newDateTime.setMinutes(new Date().getMinutes());
    }

    setSelectedDateTime(newDateTime);
    onChange(newDateTime);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const timeValue = e.target.value;
    if (!selectedDateTime) return;

    const [hours, minutes] = timeValue.split(":").map(Number);
    const newDateTime = new Date(selectedDateTime);
    newDateTime.setHours(hours);
    newDateTime.setMinutes(minutes);

    setSelectedDateTime(newDateTime);
    onChange(newDateTime);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <InputGroup>
          <InputGroupInput
            value={value ? format(value, "PPPP HH:mm") : ""}
            placeholder={placeholder}
          />
          <InputGroupAddon align={"block-start"}>{label}</InputGroupAddon>
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar
          mode='single'
          selected={selectedDateTime}
          onSelect={handleSelectDate}
        />

        <div className='p-3 border-t border-border'>
          <div className='flex items-center gap-2'>
            <Clock className='opacity-50' />
            <span className='text-sm font-medium'>Time:</span>
            <Input
              type='time'
              className='w-full'
              value={selectedDateTime ? format(selectedDateTime, "HH:mm") : ""}
              onChange={handleTimeChange}
              disabled={!selectedDateTime}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

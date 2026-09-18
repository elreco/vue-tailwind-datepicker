"use client";
import { useState } from "react";
import { Calendar, parseCalendarDate } from "./calendar";
import { Popover } from "./popover";
export function DatePicker({
  label = "Choose a date",
  value,
  defaultValue,
  onValueChange,
  name,
  min,
  max,
  locale = "en",
}: {
  label?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (date: string) => void;
  name?: string;
  min?: string;
  max?: string;
  locale?: string;
}) {
  const [internal, setInternal] = useState(defaultValue),
    [open, setOpen] = useState(false);
  const selected = value ?? internal;
  const display = selected
    ? new Intl.DateTimeFormat(locale, {
        dateStyle: "medium",
        timeZone: "UTC",
      }).format(parseCalendarDate(selected))
    : label;
  return (
    <div className="cr-date-picker">
      {name && <input type="hidden" name={name} value={selected ?? ""} />}
      <Popover
        trigger={
          <span aria-label={`${label}${selected ? ": " + display : ""}`}>
            {display} <span aria-hidden="true">▦</span>
          </span>
        }
        title={label}
        open={open}
        onOpenChange={setOpen}
      >
        <Calendar
          label={label}
          locale={locale}
          value={selected}
          min={min}
          max={max}
          onValueChange={(date) => {
            setInternal(date);
            onValueChange?.(date);
            setOpen(false);
          }}
        />
      </Popover>
    </div>
  );
}

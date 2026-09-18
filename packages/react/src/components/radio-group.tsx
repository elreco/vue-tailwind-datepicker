"use client";
import type { ComponentProps } from "react";
import { RadioGroup as Group } from "@base-ui/react/radio-group";
import { Radio as Base } from "@base-ui/react/radio";
export function RadioGroup({
  label,
  options,
  ...props
}: Omit<ComponentProps<typeof Group>, "className" | "children"> & {
  label: string;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
}) {
  return (
    <Group {...props} aria-label={label} className="cr-radio-group">
      {options.map((option) => (
        <label className="cr-check-label" key={option.value}>
          <Base.Root
            value={option.value}
            disabled={option.disabled}
            className="cr-radio"
          >
            <Base.Indicator className="cr-radio-indicator" />
          </Base.Root>
          {option.label}
        </label>
      ))}
    </Group>
  );
}

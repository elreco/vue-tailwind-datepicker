"use client";
import type { ComponentProps, ReactNode } from "react";
import { Checkbox as Base } from "@base-ui/react/checkbox";
export function Checkbox({
  label,
  ...props
}: Omit<ComponentProps<typeof Base.Root>, "className"> & { label: ReactNode }) {
  return (
    <label className="cr-check-label">
      <Base.Root {...props} className="cr-checkbox">
        <Base.Indicator className="cr-check-indicator">
          {props.indeterminate ? "−" : "✓"}
        </Base.Indicator>
      </Base.Root>
      <span>{label}</span>
    </label>
  );
}

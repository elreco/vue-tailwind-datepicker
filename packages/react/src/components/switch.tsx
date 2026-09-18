"use client";
import type { ComponentProps, ReactNode } from "react";
import { Switch as Base } from "@base-ui/react/switch";
export function Switch({
  label,
  ...props
}: Omit<ComponentProps<typeof Base.Root>, "className"> & { label: ReactNode }) {
  return (
    <label className="cr-check-label">
      <Base.Root {...props} className="cr-switch">
        <Base.Thumb className="cr-switch-thumb" />
      </Base.Root>
      <span>{label}</span>
    </label>
  );
}

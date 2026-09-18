"use client";
import type { ComponentProps, ReactNode } from "react";
import { Field as Base } from "@base-ui/react/field";
export function Field({
  label,
  description,
  error,
  children,
  ...props
}: Omit<ComponentProps<typeof Base.Root>, "className"> & {
  label: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
}) {
  return (
    <Base.Root
      {...props}
      invalid={Boolean(error) || props.invalid}
      className="cr-field"
    >
      <Base.Label className="cr-label">{label}</Base.Label>
      {description && (
        <Base.Description className="cr-description">
          {description}
        </Base.Description>
      )}
      {children}
      {error && (
        <Base.Error match className="cr-field-error">
          {error}
        </Base.Error>
      )}
    </Base.Root>
  );
}

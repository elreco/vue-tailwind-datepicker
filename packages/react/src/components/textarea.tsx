"use client";
import type { TextareaHTMLAttributes } from "react";
import { Field as Base } from "@base-ui/react/field";
import { cx } from "./utils";
export function Textarea({
  className,
  rows = 4,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Base.Control
      render={<textarea {...props} rows={rows} />}
      className={cx("cr-textarea", className)}
    />
  );
}

"use client";
import { NumberField as Base } from "@base-ui/react/number-field";
export function NumberField({
  label,
  min,
  max,
  step = 1,
  defaultValue = 0,
  value,
  onValueChange,
}: {
  label: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number | null;
  onValueChange?: (value: number | null) => void;
}) {
  return (
    <Base.Root
      min={min}
      max={max}
      step={step}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      className="cr-number-field"
    >
      <Base.ScrubArea>
        <label className="cr-label">{label}</label>
        <Base.ScrubAreaCursor>↔</Base.ScrubAreaCursor>
      </Base.ScrubArea>
      <Base.Group className="cr-number-group">
        <Base.Decrement aria-label={"Decrease " + label}>−</Base.Decrement>
        <Base.Input aria-label={label} />
        <Base.Increment aria-label={"Increase " + label}>+</Base.Increment>
      </Base.Group>
    </Base.Root>
  );
}

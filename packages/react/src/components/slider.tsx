"use client";
import type { ComponentProps } from "react";
import { Slider as Base } from "@base-ui/react/slider";
export function Slider({
  label,
  ...props
}: Omit<ComponentProps<typeof Base.Root>, "className" | "children"> & {
  label: string;
}) {
  return (
    <Base.Root {...props} className="cr-slider">
      <div className="cr-row">
        <Base.Label className="cr-label">{label}</Base.Label>
        <Base.Value className="cr-description" />
      </div>
      <Base.Control className="cr-slider-control">
        <Base.Track className="cr-slider-track">
          <Base.Indicator className="cr-slider-indicator" />
          <Base.Thumb className="cr-slider-thumb" aria-label={label} />
        </Base.Track>
      </Base.Control>
    </Base.Root>
  );
}

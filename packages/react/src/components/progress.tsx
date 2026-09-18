"use client";
import { Progress as Base } from "@base-ui/react/progress";
export function Progress({
  label,
  value,
  max = 100,
}: {
  label: string;
  value: number | null;
  max?: number;
}) {
  return (
    <Base.Root
      value={value}
      max={max}
      aria-label={label}
      className="cr-progress"
    >
      <div className="cr-row">
        <Base.Label className="cr-label">{label}</Base.Label>
        <Base.Value className="cr-description" />
      </div>
      <Base.Track className="cr-progress-track">
        <Base.Indicator className="cr-progress-indicator" />
      </Base.Track>
    </Base.Root>
  );
}

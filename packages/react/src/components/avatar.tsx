"use client";
import { Avatar as Base } from "@base-ui/react/avatar";
export function Avatar({
  src,
  name,
  size = 36,
}: {
  src?: string;
  name: string;
  size?: number;
}) {
  return (
    <Base.Root className="cr-avatar" style={{ width: size, height: size }}>
      <Base.Image src={src} alt={name} className="cr-avatar-image" />
      <Base.Fallback aria-label={name}>
        {name
          .split(" ")
          .map((w) => w.charAt(0))
          .slice(0, 2)
          .join("")}
      </Base.Fallback>
    </Base.Root>
  );
}

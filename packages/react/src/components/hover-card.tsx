"use client";
import { PreviewCard as Base } from "@base-ui/react/preview-card";
import type { ReactNode } from "react";
import { usePortalContainer } from "./utils";
export function HoverCard({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  const container = usePortalContainer();
  return (
    <Base.Root>
      <Base.Trigger href={href} className="cr-link">
        {label}
      </Base.Trigger>
      <Base.Portal container={container}>
        <Base.Positioner sideOffset={8} className="cr-positioner">
          <Base.Popup className="cr-popup cr-hover-card">{children}</Base.Popup>
        </Base.Positioner>
      </Base.Portal>
    </Base.Root>
  );
}

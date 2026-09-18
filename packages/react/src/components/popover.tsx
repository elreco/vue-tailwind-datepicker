"use client";
import { Popover as Base } from "@base-ui/react/popover";
import type { ReactNode } from "react";
import { usePortalContainer } from "./utils";
export function Popover({
  trigger,
  title,
  children,
  open,
  onOpenChange,
}: {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const container = usePortalContainer();
  return (
    <Base.Root open={open} onOpenChange={onOpenChange}>
      <Base.Trigger className="cr-button" data-variant="outline">
        {trigger}
      </Base.Trigger>
      <Base.Portal container={container}>
        <Base.Positioner sideOffset={8} className="cr-positioner">
          <Base.Popup className="cr-popup cr-popover">
            <Base.Title className="cr-popover-title">{title}</Base.Title>
            {children}
            <Base.Close aria-label="Close popover" className="cr-popover-close">
              ×
            </Base.Close>
          </Base.Popup>
        </Base.Positioner>
      </Base.Portal>
    </Base.Root>
  );
}

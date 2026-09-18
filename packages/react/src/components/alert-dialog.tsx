"use client";
import { AlertDialog as Base } from "@base-ui/react/alert-dialog";
import type { ReactNode } from "react";
import { usePortalContainer } from "./utils";
export function AlertDialog({
  trigger,
  title,
  description,
  children,
  open,
  onOpenChange,
}: {
  trigger: ReactNode;
  title: string;
  description?: string;
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
        <Base.Backdrop className="cr-backdrop" />
        <Base.Viewport className="cr-modal-viewport" data-kind="alert-dialog">
          <Base.Popup className="cr-modal cr-alert-dialog">
            <Base.Title className="cr-modal-title">{title}</Base.Title>
            {description && (
              <Base.Description className="cr-description">
                {description}
              </Base.Description>
            )}
            <div className="cr-modal-content">{children}</div>
            <Base.Close className="cr-button" data-variant="secondary">
              Close
            </Base.Close>
          </Base.Popup>
        </Base.Viewport>
      </Base.Portal>
    </Base.Root>
  );
}

"use client";
import { Toast as Base } from "@base-ui/react/toast";
import { usePortalContainer } from "./utils";
import { Button } from "./button";
import type { ReactNode } from "react";
export const useToast = Base.useToastManager;
export const createToastManager = Base.createToastManager;
export function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <Base.Provider limit={3} timeout={6000}>
      {children}
      <ToastViewport />
    </Base.Provider>
  );
}
function ToastViewport() {
  const { toasts } = Base.useToastManager();
  const container = usePortalContainer();
  return (
    <Base.Portal container={container}>
      <Base.Viewport className="cr-toast-viewport">
        {toasts.map((toast) => (
          <Base.Root key={toast.id} toast={toast} className="cr-toast">
            <Base.Content>
              <Base.Title className="cr-toast-title" />
              <Base.Description className="cr-description" />
              {toast.actionProps && (
                <Base.Action className="cr-button" data-variant="secondary" />
              )}
            </Base.Content>
            <Base.Close
              aria-label="Dismiss notification"
              className="cr-toast-close"
            >
              ×
            </Base.Close>
          </Base.Root>
        ))}
      </Base.Viewport>
    </Base.Portal>
  );
}
/** A self-contained notification example. Applications should use ToastProvider + useToast. */
export function Toast({
  title = "Changes saved",
  description = "Your preferences are up to date.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <ToastProvider>
      <ToastTrigger title={title} description={description} />
    </ToastProvider>
  );
}
function ToastTrigger({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const manager = useToast();
  return (
    <Button onClick={() => manager.add({ title, description })}>
      Show notification
    </Button>
  );
}

"use client";
import { useState, useRef, type ReactNode, type FormEvent } from "react";
import { Alert, Button, Card } from "@coderocket/react";
export type FormAction = (values: FormData) => void | Promise<void>;
export function ActionForm({
  onSubmit,
  children,
  submitLabel = "Save changes",
  successMessage = "Saved.",
}: {
  onSubmit: FormAction;
  children: ReactNode;
  submitLabel?: string;
  successMessage?: string;
}) {
  const [state, setState] = useState<"idle" | "busy" | "success" | "error">(
    "idle",
  );
  const pending = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true;
    const data = new FormData(event.currentTarget);
    setState("busy");
    try {
      await onSubmit(data);
      setState("success");
    } catch {
      setState("error");
    } finally {
      pending.current = false;
    }
  }
  return (
    <form
      className="cr-stack"
      onSubmit={submit}
      onChange={() => {
        if (!pending.current) setState("idle");
      }}
    >
      {children}
      <Button type="submit" loading={state === "busy"}>
        {submitLabel}
      </Button>
      {state === "success" && (
        <p role="status" className="cr-description">
          {successMessage}
        </p>
      )}
      {state === "error" && (
        <Alert title="Unable to complete this action" variant="destructive">
          Please try again.
        </Alert>
      )}
    </form>
  );
}
export function BlockCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="cr-block-form">
      <Card title={title} description={description}>
        {children}
      </Card>
    </div>
  );
}

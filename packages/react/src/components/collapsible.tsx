"use client";
import { Collapsible as Base } from "@base-ui/react/collapsible";
import type { ReactNode } from "react";
export function Collapsible({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <Base.Root defaultOpen={defaultOpen} className="cr-collapsible">
      <Base.Trigger className="cr-button" data-variant="ghost">
        {title}
        <span aria-hidden="true">⌄</span>
      </Base.Trigger>
      <Base.Panel className="cr-collapsible-panel">{children}</Base.Panel>
    </Base.Root>
  );
}

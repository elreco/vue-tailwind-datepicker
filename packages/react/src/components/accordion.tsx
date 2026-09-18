"use client";
import { Accordion as Base } from "@base-ui/react/accordion";
import type { ReactNode } from "react";
export function Accordion({
  items,
  multiple = false,
}: {
  items: Array<{ value: string; title: string; content: ReactNode }>;
  multiple?: boolean;
}) {
  return (
    <Base.Root multiple={multiple} className="cr-accordion">
      {items.map((item) => (
        <Base.Item
          key={item.value}
          value={item.value}
          className="cr-accordion-item"
        >
          <Base.Header>
            <Base.Trigger className="cr-accordion-trigger">
              {item.title}
              <span aria-hidden="true">+</span>
            </Base.Trigger>
          </Base.Header>
          <Base.Panel className="cr-accordion-panel">{item.content}</Base.Panel>
        </Base.Item>
      ))}
    </Base.Root>
  );
}

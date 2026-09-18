"use client";
import { Tabs as Base } from "@base-ui/react/tabs";
import type { ReactNode } from "react";
export function Tabs({
  label,
  items,
  value,
  defaultValue,
  onValueChange,
}: {
  label: string;
  items: Array<{
    value: string;
    label: string;
    content: ReactNode;
    disabled?: boolean;
  }>;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}) {
  return (
    <Base.Root
      value={value}
      defaultValue={defaultValue ?? items[0]?.value}
      onValueChange={(v) => onValueChange?.(String(v))}
      className="cr-tabs"
    >
      <Base.List aria-label={label} className="cr-tabs-list">
        {items.map((item) => (
          <Base.Tab
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            className="cr-tab"
          >
            {item.label}
          </Base.Tab>
        ))}
      </Base.List>
      {items.map((item) => (
        <Base.Panel
          key={item.value}
          value={item.value}
          className="cr-tab-panel"
        >
          {item.content}
        </Base.Panel>
      ))}
    </Base.Root>
  );
}

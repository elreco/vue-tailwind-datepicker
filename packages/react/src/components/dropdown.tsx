"use client";
import { Menu as Base } from "@base-ui/react/menu";
import type { ReactNode } from "react";
import { usePortalContainer } from "./utils";
export interface MenuAction {
  label: string;
  onSelect: () => void;
  disabled?: boolean;
  destructive?: boolean;
}
export function Dropdown({
  trigger,
  items,
}: {
  trigger: ReactNode;
  items: MenuAction[];
}) {
  const container = usePortalContainer();
  return (
    <Base.Root>
      <Base.Trigger className="cr-button" data-variant="outline">
        {trigger}
        <span aria-hidden="true">⌄</span>
      </Base.Trigger>
      <Base.Portal container={container}>
        <Base.Positioner sideOffset={6} className="cr-positioner">
          <Base.Popup className="cr-popup">
            {items.map((item, index) => (
              <Base.Item
                key={index}
                className="cr-menu-item"
                data-destructive={item.destructive || undefined}
                disabled={item.disabled}
                onClick={item.onSelect}
              >
                {item.label}
              </Base.Item>
            ))}
          </Base.Popup>
        </Base.Positioner>
      </Base.Portal>
    </Base.Root>
  );
}

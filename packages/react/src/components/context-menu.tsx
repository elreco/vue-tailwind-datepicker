"use client";
import { ContextMenu as Base } from "@base-ui/react/context-menu";
import { Menu } from "@base-ui/react/menu";
import type { ReactNode } from "react";
import type { MenuAction } from "./dropdown";
import { usePortalContainer } from "./utils";
export function ContextMenu({
  children,
  items,
}: {
  children: ReactNode;
  items: MenuAction[];
}) {
  const container = usePortalContainer();
  return (
    <Base.Root>
      <Base.Trigger className="cr-context-trigger" tabIndex={0}>
        {children}
      </Base.Trigger>
      <Menu.Portal container={container}>
        <Menu.Positioner className="cr-positioner">
          <Menu.Popup className="cr-popup">
            {items.map((item, index) => (
              <Menu.Item
                key={index}
                className="cr-menu-item"
                disabled={item.disabled}
                onClick={item.onSelect}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Base.Root>
  );
}

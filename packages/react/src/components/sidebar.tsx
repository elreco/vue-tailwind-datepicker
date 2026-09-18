"use client";
import { useState, type ReactNode } from "react";
import { Button } from "./button";
export function Sidebar({
  brand,
  items,
  footer,
  label = "Workspace navigation",
}: {
  brand: ReactNode;
  items: Array<{
    label: string;
    href: string;
    icon?: ReactNode;
    active?: boolean;
  }>;
  footer?: ReactNode;
  label?: string;
}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside className="cr-sidebar" data-collapsed={collapsed}>
      <div className="cr-sidebar-header">
        {!collapsed && brand}
        <Button
          variant="ghost"
          size="sm"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!collapsed}
          onClick={() => setCollapsed(!collapsed)}
        >
          ☰
        </Button>
      </div>
      <nav aria-label={label}>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-label={collapsed ? item.label : undefined}
            aria-current={item.active ? "page" : undefined}
          >
            {item.icon || <span aria-hidden="true">◇</span>}
            {!collapsed && item.label}
          </a>
        ))}
      </nav>
      {!collapsed && footer && <footer>{footer}</footer>}
    </aside>
  );
}

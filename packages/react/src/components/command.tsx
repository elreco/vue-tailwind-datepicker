"use client";
import { Combobox as Base } from "@base-ui/react/combobox";
import { Dialog } from "./dialog";
import { useState, type ReactNode } from "react";
export interface CommandItem {
  value: string;
  label: string;
  description?: string;
  onSelect: () => void;
  disabled?: boolean;
}
export function Command({
  trigger = "Open commands",
  title = "Command menu",
  items,
  open,
  onOpenChange,
}: {
  trigger?: ReactNode;
  title?: string;
  items: CommandItem[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [internal, setInternal] = useState(false);
  const setOpen = (value: boolean) => {
    setInternal(value);
    onOpenChange?.(value);
  };
  return (
    <Dialog
      trigger={trigger}
      title={title}
      open={open ?? internal}
      onOpenChange={setOpen}
    >
      <Base.Root
        items={items}
        inline
        autoHighlight
        onValueChange={(item: CommandItem | null) => {
          if (item && !item.disabled) {
            item.onSelect();
            setOpen(false);
          }
        }}
      >
        <Base.Input
          className="cr-input"
          aria-label="Search commands"
          placeholder="Search commands…"
        />
        <Base.Empty className="cr-description">
          No matching commands.
        </Base.Empty>
        <Base.List className="cr-command-list">
          {(item: CommandItem) => (
            <Base.Item
              className="cr-menu-item"
              key={item.value}
              value={item}
              disabled={item.disabled}
            >
              <span>{item.label}</span>
              {item.description && (
                <small className="cr-description">{item.description}</small>
              )}
            </Base.Item>
          )}
        </Base.List>
      </Base.Root>
    </Dialog>
  );
}

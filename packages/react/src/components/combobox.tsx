"use client";
import { Combobox as Base } from "@base-ui/react/combobox";
import { usePortalContainer } from "./utils";
export function Combobox({
  label,
  items,
  value,
  onValueChange,
  placeholder = "Search…",
}: {
  label: string;
  items: string[];
  value?: string | null;
  onValueChange?: (value: string | null) => void;
  placeholder?: string;
}) {
  const container = usePortalContainer();
  return (
    <Base.Root items={items} value={value} onValueChange={onValueChange}>
      <Base.InputGroup className="cr-input-group">
        <Base.Input
          aria-label={label}
          placeholder={placeholder}
          className="cr-input"
        />
        <Base.Trigger aria-label={"Open " + label} className="cr-input-addon">
          ⌄
        </Base.Trigger>
      </Base.InputGroup>
      <Base.Portal container={container}>
        <Base.Positioner sideOffset={6} className="cr-positioner">
          <Base.Popup className="cr-popup">
            <Base.Empty className="cr-menu-item">No results found.</Base.Empty>
            <Base.List>
              {(item: string) => (
                <Base.Item key={item} value={item} className="cr-menu-item">
                  {item}
                  <Base.ItemIndicator>✓</Base.ItemIndicator>
                </Base.Item>
              )}
            </Base.List>
          </Base.Popup>
        </Base.Positioner>
      </Base.Portal>
    </Base.Root>
  );
}

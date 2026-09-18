"use client";
import { Select as Base } from "@base-ui/react/select";
import { usePortalContainer } from "./utils";
export interface SelectProps {
  label: string;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  value?: string | null;
  defaultValue?: string;
  onValueChange?: (value: string | null) => void;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  required?: boolean;
}
export function Select({
  label,
  options,
  placeholder = "Select an option",
  ...props
}: SelectProps) {
  const container = usePortalContainer();
  return (
    <Base.Root {...props} items={options}>
      <Base.Trigger aria-label={label} className="cr-select-trigger">
        <Base.Value placeholder={placeholder} />
        <Base.Icon>⌄</Base.Icon>
      </Base.Trigger>
      <Base.Portal container={container}>
        <Base.Positioner sideOffset={6} className="cr-positioner">
          <Base.Popup className="cr-popup">
            <Base.List>
              {options.map((option) => (
                <Base.Item
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                  className="cr-menu-item"
                >
                  <Base.ItemText>{option.label}</Base.ItemText>
                  <Base.ItemIndicator>✓</Base.ItemIndicator>
                </Base.Item>
              ))}
            </Base.List>
          </Base.Popup>
        </Base.Positioner>
      </Base.Portal>
    </Base.Root>
  );
}

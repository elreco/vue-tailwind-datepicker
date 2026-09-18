"use client";
import { ToggleGroup as Group } from "@base-ui/react/toggle-group";
import { Toggle } from "@base-ui/react/toggle";
export function ToggleGroup({
  label,
  items,
  multiple = false,
}: {
  label: string;
  items: Array<{ value: string; label: string }>;
  multiple?: boolean;
}) {
  return (
    <Group aria-label={label} multiple={multiple} className="cr-toggle-group">
      {items.map((item) => (
        <Toggle key={item.value} value={item.value} className="cr-toggle">
          {item.label}
        </Toggle>
      ))}
    </Group>
  );
}

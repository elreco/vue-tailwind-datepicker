"use client";
import { NavigationMenu as Base } from "@base-ui/react/navigation-menu";
import { usePortalContainer } from "./utils";
export function NavigationMenu({
  label = "Main navigation",
  items,
}: {
  label?: string;
  items: Array<{
    label: string;
    links: Array<{ label: string; href: string; description?: string }>;
  }>;
}) {
  const container = usePortalContainer();
  return (
    <Base.Root className="cr-navigation" aria-label={label}>
      <Base.List className="cr-navigation-list">
        {items.map((item, index) => (
          <Base.Item key={index}>
            <Base.Trigger className="cr-button" data-variant="ghost">
              {item.label} ⌄
            </Base.Trigger>
            <Base.Content className="cr-navigation-content">
              {item.links.map((link) => (
                <Base.Link
                  key={link.href}
                  href={link.href}
                  className="cr-navigation-link"
                >
                  <strong>{link.label}</strong>
                  {link.description && <span>{link.description}</span>}
                </Base.Link>
              ))}
            </Base.Content>
          </Base.Item>
        ))}
      </Base.List>
      <Base.Portal container={container}>
        <Base.Positioner sideOffset={8} className="cr-positioner">
          <Base.Popup className="cr-popup">
            <Base.Viewport />
          </Base.Popup>
        </Base.Positioner>
      </Base.Portal>
    </Base.Root>
  );
}

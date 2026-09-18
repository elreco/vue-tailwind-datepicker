"use client";
import { Tooltip as Base } from "@base-ui/react/tooltip";
import type { ReactNode } from "react";
import { usePortalContainer } from "./utils";
export function Tooltip({
  trigger,
  content,
}: {
  trigger: ReactNode;
  content: string;
}) {
  const container = usePortalContainer();
  return (
    <Base.Provider>
      <Base.Root>
        <Base.Trigger className="cr-button" data-variant="outline">
          {trigger}
        </Base.Trigger>
        <Base.Portal container={container}>
          <Base.Positioner sideOffset={6} className="cr-positioner">
            <Base.Popup className="cr-tooltip">
              {content}
              <Base.Arrow />
            </Base.Popup>
          </Base.Positioner>
        </Base.Portal>
      </Base.Root>
    </Base.Provider>
  );
}

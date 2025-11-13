"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "./utils";

function Switch({
  className,
  checked,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      checked={checked}
      className={cn(
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#046741] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={{
        width: "44px",
        height: "24px",
        backgroundColor: checked ? "#046741" : "#9ca3af",
        transition: "background-color 0.2s ease-in-out",
      }}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full bg-white ring-0 transition-transform"
        )}
        style={{
          width: "20px",
          height: "20px",
          transform: checked ? "translateX(20px)" : "translateX(2px)",
          transition: "transform 0.2s ease-in-out",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };

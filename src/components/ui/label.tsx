import * as React from "react";
import { cn } from "@/lib/utils";

const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => {
    return (
      <label
        data-slot="label"
        ref={ref}
        className={cn(
          "flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-ink/50 text-[11px] uppercase tracking-widest font-medium",
          className
        )}
        {...props}
      />
    );
  }
);
Label.displayName = "Label";

export { Label };

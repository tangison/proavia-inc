"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, placeholder, options, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "w-full appearance-none h-12 rounded-xl bg-canvas-warm border border-black/5 px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px] focus-visible:border-gold/50 focus-visible:ring-gold/20 disabled:cursor-not-allowed disabled:opacity-50 pr-10",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50 pointer-events-none" />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };

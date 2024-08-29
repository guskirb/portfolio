import React from "react";
import { cn } from "../../../lib/cn";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(50).fill(1);
  const cols = new Array(50).fill(1);

  return (
    <div
      style={{
        transform: `translate(-35%,-30%) skewX(-46deg) skewY(14deg) scale(0.85) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <div
          key={`row` + i}
          className="w-20 h-10 transition-all border-l border-neutral-200 dark:border-neutral-800 relative"
        >
          {cols.map((_, j) => (
            <div
              
              key={`col` + j}
              className="w-20 h-10  border-r border-t border-neutral-200 dark:border-neutral-800 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[13px] -left-[22px] text-neutral-300 dark:text-neutral-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const HeroBg = React.memo(BoxesCore);

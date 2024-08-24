import { ReactNode } from "react";
import { cn } from "../../../lib/cn";

export default function Card({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  return (
    <div className={cn("rounded-xl p-6 flex flex-col gap-3 " + color)}>
      {children}
    </div>
  );
}

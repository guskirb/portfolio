import { ReactNode } from "react";
import { cn } from "../../../lib/cn";

interface CardProps {
  children: ReactNode;
  color: string;
  handleMouseOver: () => void;
  handleMouseOut: () => void;
}

export default function Card({
  children,
  color,
  handleMouseOver,
  handleMouseOut,
}: CardProps) {
  return (
    <div
      className={cn("duration-300 rounded-xl p-6 flex flex-col gap-5 hover:-translate-y-3 " + color)}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      {children}
    </div>
  );
}

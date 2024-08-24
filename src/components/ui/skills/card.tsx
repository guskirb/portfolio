import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  handleMouseOver: () => void;
  handleMouseOut: () => void;
}

export default function Card({
  children,
  handleMouseOver,
  handleMouseOut,
}: CardProps) {
  return (
    <div
      className="skill-card text-white dark:text-[#262626] dark:bg-neutral-100 bg-neutral-900 duration-300 rounded-xl p-6 flex flex-col gap-5 hover:-translate-y-3"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      {children}
    </div>
  );
}

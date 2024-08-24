import { Tooltip } from "react-tooltip";
import { cn } from "../../../lib/cn";
import { ReactNode } from "react";

interface SkillIconProps {
  children: ReactNode;
  name: string;
  id: string;
  className: string;
}

export default function SkillIcon({
  children,
  name,
  id,
  className,
}: SkillIconProps) {
  return (
    <>
      <Tooltip id={id} float>
        {name}
      </Tooltip>
      <div
        data-tooltip-id={id}
        className={cn(
          "p-2 bg-[#67bb4a50] rounded-xl flex justify-center items-center",
          className
        )}
      >
        {children}
      </div>
    </>
  );
}

import { Tooltip } from "react-tooltip";
import { Brush, Palette } from "lucide-react";
import { ReactOriginal, TailwindcssOriginal } from "devicons-react";

import useHover from "../../../hooks/useHover";
import Card from "./card";
import { cn } from "../../../lib/cn";

export default function FrontEnd() {
  const { isHovering, handleMouseOut, handleMouseOver } = useHover();
  return (
    <Card handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver}>
      <Palette
        size={60}
        strokeWidth={2.5}
        className={cn(
          "absolute duration-300 text-pink-300 rotate-12 translate-x-[110px] translate-y-[60px]",
          isHovering ? "opacity-1 translate-y-[90px]" : "opacity-0"
        )}
      />
      <Brush
        size={60}
        strokeWidth={2.5}
        className={cn(
          "absolute duration-300 text-green-300 rotate-12 -translate-x-[40px] -translate-y-[30px]",
          isHovering ? "opacity-1 -translate-y-[50px]" : "opacity-0"
        )}
      />
      <h3 className="text-3xl">Frontend</h3>
      <div className="flex gap-3 flex-wrap">
        <Tooltip id="react" float>
          React
        </Tooltip>
        <div
          data-tooltip-id="react"
          className="p-2 bg-[#61dafb50] rounded-xl flex justify-center items-center"
        >
          <ReactOriginal size="40" />
        </div>
        <Tooltip id="tailwind" float>
          Tailwind
        </Tooltip>
        <div
          data-tooltip-id="tailwind"
          className="p-2 bg-[#38bdf850] rounded-xl flex justify-center items-center"
        >
          <TailwindcssOriginal size="40" />
        </div>
      </div>
    </Card>
  );
}

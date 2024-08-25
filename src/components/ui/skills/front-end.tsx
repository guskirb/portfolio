import { Brush, Palette } from "lucide-react";
import {
  FramermotionOriginal,
  ReactOriginal,
  TailwindcssOriginal,
} from "devicons-react";

import useHover from "../../../hooks/useHover";
import Card from "./card";
import { cn } from "../../../lib/cn";
import SkillIcon from "./skill-icon";

export default function FrontEnd() {
  const { isHovering, handleMouseOut, handleMouseOver } = useHover();
  return (
    <Card handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver}>
      <Palette
        size={60}
        strokeWidth={2.5}
        className={cn(
          "absolute duration-300 text-pink-300 rotate-12 translate-x-[175px] translate-y-[80px]",
          isHovering ? "opacity-1 translate-y-[105px]" : "opacity-0"
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
      <h3 className="text-3xl">Front End</h3>
      <div className="flex gap-1 lg:gap-3 flex-wrap">
        <SkillIcon name="React" id="react" className="bg-[#61dafb50]">
          <ReactOriginal size="40" />
        </SkillIcon>
        <SkillIcon name="Tailwind" id="tailwind" className="bg-[#38bdf850]">
          <TailwindcssOriginal size="40" />
        </SkillIcon>
        <SkillIcon
          name="Framer Motion"
          id="framer"
          className="transition-all bg-[#ffffff60] dark:bg-[#2d374850]"
        >
          <FramermotionOriginal size="40" />
        </SkillIcon>
      </div>
    </Card>
  );
}

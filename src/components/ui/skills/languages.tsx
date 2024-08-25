import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  TypescriptOriginal,
  AzuresqldatabasePlain,
} from "devicons-react";
import { Braces } from "lucide-react";

import Card from "./card";
import useHover from "../../../hooks/useHover";
import { cn } from "../../../lib/cn";
import SkillIcon from "./skill-icon";

export default function Languages() {
  const { isHovering, handleMouseOut, handleMouseOver } = useHover();

  return (
    <Card handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver}>
      <Braces
        size={60}
        strokeWidth={2.5}
        className={cn(
          "absolute duration-300 text-yellow-300 rotate-12 translate-x-[250px] -translate-y-8",
          isHovering ? "opacity-1 -translate-y-12" : "opacity-0"
        )}
      />
      <h3 className="text-3xl">Languages</h3>
      <div className="flex gap-3 flex-wrap">
        <SkillIcon name="HTML" id="html" className="bg-[#e44d2650]">
          <Html5Original size="40" />
        </SkillIcon>
        <SkillIcon name="CSS" id="css" className="bg-[#1572b650]">
          <Css3Original size="40" />
        </SkillIcon>
        <SkillIcon name="JavaScript" id="js" className="bg-[#f0db4f50]">
          <JavascriptOriginal size="40" />
        </SkillIcon>
        <SkillIcon name="TypeScript" id="ts" className="bg-[#007acc50]">
          <TypescriptOriginal size="40" />
        </SkillIcon>
        <SkillIcon name="SQL" id="sql" className="bg-[#1f65b750]">
          <AzuresqldatabasePlain size="40" />
        </SkillIcon>
      </div>
    </Card>
  );
}

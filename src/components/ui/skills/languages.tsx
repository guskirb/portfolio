import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  TypescriptOriginal,
} from "devicons-react";
import { Braces } from "lucide-react";
import { Tooltip } from "react-tooltip";
import Card from "./card";
import useHover from "../../../hooks/useHover";
import { cn } from "../../../lib/cn";

export default function Languages() {
  const { isHovering, handleMouseOut, handleMouseOver } = useHover();

  return (
    <Card
      color="bg-pink-300"
      handleMouseOut={handleMouseOut}
      handleMouseOver={handleMouseOver}
    >
      <Braces
        size={60}
        strokeWidth={2.5}
        className={cn(
          "absolute duration-300 dark:text-white rotate-12 translate-x-[230px] -translate-y-7",
          isHovering ? "opacity-1 -translate-y-10" : "opacity-0"
        )}
      />

      <h3 className="text-3xl">Languages</h3>
      <div className="flex gap-3 flex-wrap">
        <Tooltip id="html" float>
          HTML
        </Tooltip>
        <Html5Original size="60" data-tooltip-id="html" />
        <Tooltip id="css" float>
          CSS
        </Tooltip>
        <Css3Original size="60" data-tooltip-id="css" />
        <Tooltip id="js" float>
          JavaScript
        </Tooltip>
        <JavascriptOriginal size="60" data-tooltip-id="js" />
        <Tooltip id="ts" float>
          TypeScript
        </Tooltip>
        <TypescriptOriginal size="60" data-tooltip-id="ts" />
      </div>
    </Card>
  );
}

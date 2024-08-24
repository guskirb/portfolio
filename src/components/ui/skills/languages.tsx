import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  TypescriptOriginal,
  AzuresqldatabasePlain,
} from "devicons-react";
import { Braces } from "lucide-react";
import { Tooltip } from "react-tooltip";
import Card from "./card";
import useHover from "../../../hooks/useHover";
import { cn } from "../../../lib/cn";

export default function Languages() {
  const { isHovering, handleMouseOut, handleMouseOver } = useHover();

  return (
    <Card handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver}>
      <Braces
        size={60}
        strokeWidth={2.5}
        className={cn(
          "absolute duration-300 text-yellow-300 rotate-12 translate-x-[210px] -translate-y-7",
          isHovering ? "opacity-1 -translate-y-10" : "opacity-0"
        )}
      />
      <h3 className="text-3xl">Languages</h3>
      <div className="flex gap-3 flex-wrap">
        <Tooltip id="html" float>
          HTML
        </Tooltip>
        <div
          data-tooltip-id="html"
          className="p-2 bg-[#e44d2650] rounded-xl flex justify-center items-center"
        >
          <Html5Original size="40" />
        </div>
        <Tooltip id="css" float>
          CSS
        </Tooltip>
        <div
          data-tooltip-id="css"
          className="p-2 bg-[#1572b650] rounded-xl flex justify-center items-center"
        >
          <Css3Original size="40" />
        </div>
        <Tooltip id="js" float>
          JavaScript
        </Tooltip>
        <div
          data-tooltip-id="js"
          className="p-2 bg-[#f0db4f50] rounded-xl flex justify-center items-center"
        >
          <JavascriptOriginal size="40" />
        </div>
        <Tooltip id="ts" float>
          TypeScript
        </Tooltip>
        <div
          data-tooltip-id="ts"
          className="p-2 bg-[#007acc50] rounded-xl flex justify-center items-center"
        >
          <TypescriptOriginal size="40" />
        </div>
        <Tooltip id="sql" float>
          SQL
        </Tooltip>
        <div
          data-tooltip-id="sql"
          className="p-2 bg-[#1f65b750] rounded-xl flex justify-center items-center"
        >
          <AzuresqldatabasePlain size="40" />
        </div>
      </div>
    </Card>
  );
}

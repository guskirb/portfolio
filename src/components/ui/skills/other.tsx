import { Tooltip } from "react-tooltip";
import { GitPullRequestArrow } from "lucide-react";
import {
  GitOriginal,
  JestPlain,
  NpmOriginalWordmark,
  VitejsOriginal,
} from "devicons-react";

import useHover from "../../../hooks/useHover";
import Card from "./card";
import { cn } from "../../../lib/cn";

export default function Other() {
  const { isHovering, handleMouseOut, handleMouseOver } = useHover();
  return (
    <Card handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver}>
      <GitPullRequestArrow
        size={60}
        strokeWidth={2.5}
        className={cn(
          "absolute duration-300 text-purple-400 rotate-12 translate-x-[210px] -translate-y-7",
          isHovering ? "opacity-1 -translate-y-10" : "opacity-0"
        )}
      />
      <h3 className="text-3xl">Other</h3>
      <div className="flex gap-3 flex-wrap">
        <Tooltip id="git" float>
          Git
        </Tooltip>
        <div
          data-tooltip-id="git"
          className="p-2 bg-[#f34f2950] rounded-xl flex justify-center items-center"
        >
          <GitOriginal size="40" />
        </div>
        <Tooltip id="npm" float>
          NPM
        </Tooltip>
        <div
          data-tooltip-id="npm"
          className="p-2 bg-[#cb383750] rounded-xl flex justify-center items-center"
        >
          <NpmOriginalWordmark size="40" />
        </div>
        <Tooltip id="jest" float>
          Jest
        </Tooltip>
        <div
          data-tooltip-id="jest"
          className="p-2 bg-[#923f5450] rounded-xl flex justify-center items-center"
        >
          <JestPlain size="40" />
        </div>
        <Tooltip id="vite" float>
          Vite
        </Tooltip>
        <div
          data-tooltip-id="vite"
          className="p-2 bg-[#bc34fe50] rounded-xl flex justify-center items-center"
        >
          <VitejsOriginal size="40" />
        </div>
      </div>
    </Card>
  );
}

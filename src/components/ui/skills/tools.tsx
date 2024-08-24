import { GitPullRequestArrow } from "lucide-react";
import {
  GithubOriginal,
  GitOriginal,
  JestPlain,
  NpmOriginalWordmark,
  VitejsOriginal,
  VscodeOriginal,
} from "devicons-react";

import useHover from "../../../hooks/useHover";
import Card from "./card";
import { cn } from "../../../lib/cn";
import SkillIcon from "./skill-icon";

export default function Tools() {
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
      <h3 className="text-3xl">Tools</h3>
      <div className="flex gap-3 flex-wrap">
        <SkillIcon name="Git" id="git" className="bg-[#f34f2950]">
          <GitOriginal size="40" />
        </SkillIcon>
        <SkillIcon
          name="GitHub"
          id="github"
          className="transition-all bg-[#ffffff60] dark:bg-[#06090530]"
        >
          <GithubOriginal size="40" />
        </SkillIcon>
        <SkillIcon name="VSCode" id="vscode" className="bg-[#1f9cf050]">
          <VscodeOriginal size="40" />
        </SkillIcon>
        <SkillIcon name="NPM" id="npm" className="bg-[#cb383750]">
          <NpmOriginalWordmark size="40" />
        </SkillIcon>
        <SkillIcon name="Jest" id="jest" className="bg-[#923f5450]">
          <JestPlain size="40" />
        </SkillIcon>
        <SkillIcon name="Vite" id="vite" className="bg-[#bc34fe50]">
          <VitejsOriginal size="40" />
        </SkillIcon>
      </div>
    </Card>
  );
}

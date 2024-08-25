import {
  ExpressOriginal,
  MongodbOriginal,
  NodejsOriginal,
  PostgresqlOriginal,
  PrismaOriginal,
} from "devicons-react";
import { Database, Server } from "lucide-react";

import useHover from "../../../hooks/useHover";
import Card from "./card";
import { cn } from "../../../lib/cn";
import SkillIcon from "./skill-icon";

export default function BackEnd() {
  const { isHovering, handleMouseOut, handleMouseOver } = useHover();
  return (
    <Card handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver}>
      <Database
        size={60}
        strokeWidth={2.5}
        className={cn(
          "absolute duration-300 text-blue-400 -rotate-12 translate-x-[160px] lg:translate-x-[260px] -translate-y-[20px]",
          isHovering ? "opacity-1 -translate-y-[40px]" : "opacity-0"
        )}
      />
      <Server
        size={60}
        strokeWidth={2.5}
        className={cn(
          "absolute duration-300 text-red-400 lg:rotate-12 -rotate-12 -translate-x-[40px] lg:translate-x-[150px] -translate-y-[20px]",
          isHovering ? "opacity-1 lg:-translate-y-[40px] -translate-y-[50px]" : "opacity-0"
        )}
      />
      <h3 className="text-3xl">Back End</h3>
      <div className="flex gap-1 lg:gap-3 flex-wrap">
        <SkillIcon name="NodeJS" id="node" className="bg-[#67bb4a50]">
          <NodejsOriginal size="40" />
        </SkillIcon>
        <SkillIcon
          name="Express"
          id="express"
          className="transition-all bg-[#ffffff60] dark:bg-[#06090530]"
        >
          <ExpressOriginal size="40" />
        </SkillIcon>
        <SkillIcon name="MongoDB" id="mongo" className="bg-[#5c9d5050]">
          <MongodbOriginal size="40" />
        </SkillIcon>
        <SkillIcon name="PostgreSQL" id="postgresql" className="bg-[#33679150]">
          <PostgresqlOriginal size="40" />
        </SkillIcon>
        <SkillIcon
          name="Prisma"
          id="prisma"
          className="transition-all bg-[#ffffff60] dark:bg-[#2d374850]"
        >
          <PrismaOriginal size="40" />
        </SkillIcon>
      </div>
    </Card>
  );
}

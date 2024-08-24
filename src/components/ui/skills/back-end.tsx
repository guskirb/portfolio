import { Tooltip } from "react-tooltip";
import { ExpressOriginal, MongodbOriginal, NodejsOriginal, PostgresqlOriginal, PrismaOriginal } from "devicons-react";

import useHover from "../../../hooks/useHover";
import Card from "./card";
import { cn } from "../../../lib/cn";
import { Database } from "lucide-react";

export default function BackEnd() {
  const { isHovering, handleMouseOut, handleMouseOver } = useHover();
  return (
    <Card handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver}>
      <Database
        size={60}
        strokeWidth={2.5}
        className={cn(
          "absolute duration-300 text-blue-400 -rotate-12 translate-x-[240px] -translate-y-[20px]",
          isHovering ? "opacity-1 -translate-y-[40px]" : "opacity-0"
        )}
      />
      <h3 className="text-3xl">Backend</h3>
      <div className="flex gap-3 flex-wrap">
        <Tooltip id="node" float>
          NodeJs
        </Tooltip>
        <div
          data-tooltip-id="node"
          className="p-2 bg-[#67bb4a50] rounded-xl flex justify-center items-center"
        >
          <NodejsOriginal size="40" />
        </div>
        <Tooltip id="express" float>
          Express
        </Tooltip>
        <div
          data-tooltip-id="express"
          className="p-2 transition-all bg-[#ffffff60] dark:bg-[#06090530] rounded-xl flex justify-center items-center"
        >
          <ExpressOriginal size="40" />
        </div>
        <Tooltip id="mongo" float>
          MongoDB
        </Tooltip>
        <div
          data-tooltip-id="mongo"
          className="p-2 bg-[#5c9d5050] rounded-xl flex justify-center items-center"
        >
          <MongodbOriginal size="40" />
        </div>
        <Tooltip id="postgresql" float>
          PostgreSQL
        </Tooltip>
        <div
          data-tooltip-id="postgresql"
          className="p-2 bg-[#33679150] rounded-xl flex justify-center items-center"
        >
          <PostgresqlOriginal size="40" />
        </div>
        <Tooltip id="prisma" float>
          Prisma
        </Tooltip>
        <div
          data-tooltip-id="prisma"
          className="p-2 transition-all bg-[#ffffff60] dark:bg-[#2d374850] rounded-xl flex justify-center items-center"
        >
          <PrismaOriginal size="40" />
        </div>
      </div>
    </Card>
  );
}

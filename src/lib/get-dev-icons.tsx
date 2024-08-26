import {
  Css3Original,
  ExpressOriginal,
  JavascriptOriginal,
  MongodbOriginal,
  NodejsOriginal,
  PostgresqlOriginal,
  PrismaOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  VitejsOriginal,
} from "devicons-react";

import SkillIcon from "../components/ui/skills/skill-icon";

export function getDevIcons(tech: string) {
  switch (tech) {
    case "javascript":
      return (
        <SkillIcon name="JavaScript" id="js" className="bg-[#f0db4f50]">
          <JavascriptOriginal size="30" />
        </SkillIcon>
      );
    case "typescript":
      return (
        <SkillIcon name="TypeScript" id="ts" className="bg-[#007acc50]">
          <TypescriptOriginal size="30" />
        </SkillIcon>
      );
      case "css":
        return (
          <SkillIcon name="CSS" id="css" className="bg-[#1572b650]">
          <Css3Original size="30" />
        </SkillIcon>
        );
    case "react":
      return (
        <SkillIcon name="React" id="react" className="bg-[#61dafb50]">
          <ReactOriginal size="30" />
        </SkillIcon>
      );
    case "tailwind":
      return (
        <SkillIcon name="Tailwind" id="tailwind" className="bg-[#38bdf850]">
          <TailwindcssOriginal size="30" />
        </SkillIcon>
      );
    case "node":
      return (
        <SkillIcon name="NodeJS" id="node" className="bg-[#67bb4a50]">
          <NodejsOriginal size="30" />
        </SkillIcon>
      );
    case "express":
      return (
        <SkillIcon
          name="Express"
          id="express"
          className="transition-all bg-[#ffffff60] dark:bg-[#06090530]"
        >
          <ExpressOriginal size="30" />
        </SkillIcon>
      );
      case "mongodb":
        return (
          <SkillIcon name="MongoDB" id="mongo" className="bg-[#5c9d5050]">
          <MongodbOriginal size="30" />
        </SkillIcon>
        );
    case "postgresql":
      return (
        <SkillIcon name="PostgreSQL" id="postgresql" className="bg-[#33679150]">
          <PostgresqlOriginal size="30" />
        </SkillIcon>
      );
    case "prisma":
      return (
        <SkillIcon
          name="Prisma"
          id="prisma"
          className="transition-all bg-[#ffffff60] dark:bg-[#2d374850]"
        >
          <PrismaOriginal size="30" />
        </SkillIcon>
      );
      case "vite":
      return (
        <SkillIcon name="Vite" id="vite" className="bg-[#bc34fe50]">
          <VitejsOriginal size="30" />
        </SkillIcon>
      );
  }
}

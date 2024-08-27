import { AppWindow, Code } from "lucide-react";

import { cn } from "../../../lib/cn";
import { getDevIcons } from "../../../lib/get-dev-icons";
import Button from "../button";
import Video from "../video";

interface ProjectThumbProps {
  project: any;
  index: number;
}

export default function ProjectThumb({ project, index }: ProjectThumbProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-8 my-16 lg:my-28 items-center",
        index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
    >
      <div className="videoContainer flex gap-2 relative group rounded-xl overflow-hidden duration-500 hover:scale-[0.97]">
        <Video src={project.video}/>
        <div className="transition-all absolute flex flex-wrap w-full h-full justify-center items-center content-center gap-2 opacity-0 group-hover:opacity-100 group-hover:dark:bg-[#f5f5f570] group-hover:bg-[#17171770] duration-500 rounded-xl">
          {project.stack
            ? project.stack.map((item: string) => getDevIcons(item))
            : null}
        </div>
      </div>
      <div
        className={cn(
          "flex flex-col items-center gap-4",
          index % 2 === 0 ? "lg:items-end" : "lg:items-start"
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center",
            index % 2 === 0 ? "lg:items-end" : "lg:items-start"
          )}
        >
          <h2 className="text-2xl dark:text-white">{project.title}</h2>
          <p className="text-lg dark:text-white opacity-60">{project.type}</p>
        </div>
        <p
          className={cn(
            "transition-all lg:w-[250px] dark:text-white text-center",
            index % 2 === 0 ? "lg:text-end" : "lg:text-start"
          )}
        >
          {project.description}
        </p>
        <div className="flex flex-col gap-2">
          <a className="w-full" href={project.preview}>
            <Button>
              <AppWindow />
              Live Preview
            </Button>
          </a>
          <div className="flex gap-2">
            <a className="w-full" href={project.front}>
              <Button>
                <Code />
                Client
              </Button>
            </a>
            {project.back ? (
              <a className="w-full" href={project.back}>
                <Button>
                  <Code />
                  API
                </Button>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

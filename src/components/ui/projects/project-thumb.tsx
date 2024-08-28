import { AppWindow, Code } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "../../../lib/cn";
import { getDevIcons } from "../../../lib/get-dev-icons";
import Button from "../button";
import Video from "../video";
import { Project } from "../../../types/types";

interface ProjectThumbProps {
  project: Project;
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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="videoContainer flex gap-2 relative group rounded-xl overflow-hidden duration-500 hover:scale-[0.97]">
          <Video src={project.video} />
          <div className="transition-all absolute flex flex-wrap w-full h-full justify-center items-center content-center gap-2 opacity-0 group-hover:opacity-100 group-hover:dark:bg-[#f5f5f570] group-hover:bg-[#17171770] duration-500 rounded-xl">
            {project.stack
              ? project.stack.map((item: string) => getDevIcons(item))
              : null}
          </div>
        </div>
      </motion.div>
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
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl font-medium dark:text-white"
          >
            {project.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-lg dark:text-white opacity-60"
          >
            {project.type}
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.2 }}
          className={cn(
            "transition-all lg:w-[280px] xl:w-[350px] dark:text-white text-center",
            index % 2 === 0 ? "lg:text-end" : "lg:text-start"
          )}
        >
          {project.description}
        </motion.p>
        <div className="flex flex-col gap-2">
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
            href={project.preview}
          >
            <Button>
              <AppWindow />
              Live Preview
            </Button>
          </motion.a>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.7, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex gap-2"
          >
            {project.front ? (
              <a className="w-full" href={project.front}>
                <Button>
                  <Code />
                  Client
                </Button>
              </a>
            ) : null}
            {project.back ? (
              <a className="w-full" href={project.back}>
                <Button>
                  <Code />
                  API
                </Button>
              </a>
            ) : null}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

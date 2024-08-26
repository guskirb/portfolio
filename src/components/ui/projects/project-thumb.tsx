import { getDevIcons } from "../../../lib/get-dev-icons";

export default function ProjectThumb({ project }) {
  return (
    <div className="relative flex flex-col gap-3 items-center">
      <div className="videoContainer flex gap-2 relative group rounded-xl">
        <video
          className="lg:w-[700px] rounded-xl group-hover:blur-sm duration-500"
          src={project.video}
          autoPlay
          muted
          loop
        />
        <div className="transition-all absolute flex flex-wrap w-full h-full justify-center items-center gap-2 opacity-0 group-hover:opacity-100 group-hover:dark:bg-[#f5f5f560] group-hover:bg-[#17171760] duration-500 rounded-xl">
          {project.stack
            ? project.stack.map((item: string) => getDevIcons(item))
            : null}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl dark:text-white">{project.title}</h2>
        <p className="text-lg dark:text-white opacity-60">{project.type}</p>
      </div>
    </div>
  );
}

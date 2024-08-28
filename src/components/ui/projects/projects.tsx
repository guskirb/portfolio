import { projectData } from "../../../data/project-data";
import ProjectThumb from "./project-thumb";

export default function Projects() {
  return (
    <div className="min-h-screen p-12 flex flex-col w-full justify-center items-center gap-10">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl dark:text-white">Featured Projects</h2>
        <p className="text-lg dark:text-white opacity-60">
          Hover for more info
        </p>
      </div>
      <div className="flex flex-col">
        {projectData.map((data, index) => (
          <ProjectThumb project={data} index={index} />
        ))}
        <div className="text-center text-2xl my-16">
          <p>
            Check out more on my{" "}
            <a href="https://github.com/guskirb?tab=repositories">
              <b>GitHub</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

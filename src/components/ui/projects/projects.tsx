import { projectData } from "../../../data/project-data";
import ProjectThumb from "./project-thumb";

export default function Projects() {
  return (
    <div className="min-h-screen p-12 flex flex-col w-full justify-center items-center gap-10">
      <div>
        <h2 className="text-4xl dark:text-white">Featured Projects</h2>
        <p className="dark:text-white">(Original app names ahead)</p>
      </div>
      <div className="flex flex-col gap-10">
        {projectData.map((data) => (
          <ProjectThumb project={data} />
        ))}
      </div>
    </div>
  );
}

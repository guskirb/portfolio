import { projectData } from "../../../data/project-data";
import MotionDiv from "../motion-div";
import ProjectThumb from "./project-thumb";

export default function Projects() {
  return (
    <div className="min-h-screen p-12 flex flex-col w-full justify-center items-center gap-10">
      <div className="flex flex-col items-center">
        <MotionDiv delay={0.2}>
          <h2 className="text-4xl font-medium dark:text-white">Featured Projects</h2>
        </MotionDiv>
        <MotionDiv delay={0.4}>
          <p className="text-lg dark:text-white opacity-60">
            Hover for more info
          </p>
        </MotionDiv>
      </div>
      <div className="flex flex-col">
        {projectData.map((data, index) => (
          <ProjectThumb key={index} project={data} index={index} />
        ))}
        <div className="text-center text-2xl my-16 dark:text-white">
          <MotionDiv>
            <p>
              Check out more on my{" "}
              <a
                className="hover:underline"
                href="https://github.com/guskirb?tab=repositories"
              >
                <b>GitHub</b>
              </a>
            </p>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}

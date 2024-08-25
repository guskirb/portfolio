import BackEnd from "./back-end";
import FrontEnd from "./front-end";
import { Highlight } from "./highlight-text";
import Languages from "./languages";
import Tools from "./tools";

export default function Skills() {
  return (
    <div className="p-20 flex flex-col w-full justify-center items-center gap-10 min-h-screen">
      <h2 className="text-4xl dark:text-white">
        My <Highlight>Skills</Highlight>
      </h2>

      <div className="flex gap-10 flex-wrap justify-center">
        <Languages />
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <FrontEnd />
        <BackEnd />
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <Tools />
      </div>
    </div>
  );
}

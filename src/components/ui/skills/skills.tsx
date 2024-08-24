import BackEnd from "./back-end";
import FrontEnd from "./front-end";
import Languages from "./languages";
import Other from "./other";

export default function Skills() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10">
      <h2 className="text-4xl dark:text-white">My Skills</h2>
      <div className="flex gap-10 flex-wrap justify-center">
        <Languages />
        <FrontEnd />
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <BackEnd />
        <Other />
      </div>
    </div>
  );
}

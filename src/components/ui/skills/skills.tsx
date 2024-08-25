import BackEnd from "./back-end";
import FrontEnd from "./front-end";
import Languages from "./languages";
import Tools from "./tools";

export default function Skills() {
  return (
    <div className="p-16 flex flex-col w-full justify-center items-center gap-10 min-h-screen lg:-translate-y-[50px]">
      <h2 className="text-4xl dark:text-white lg:translate-x-[200px] lg:translate-y-[200px]">
        My Skills
      </h2>
      <div className="transition-all flex gap-10 flex-wrap justify-center lg:-translate-x-[100px]">
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

import Languages from "./languages";

export default function Skills() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10">
      <h2 className="text-4xl dark:text-white">My Skills</h2>
      <div className="flex">
        <Languages />
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

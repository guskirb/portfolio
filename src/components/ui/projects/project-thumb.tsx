export default function ProjectThumb({ project }) {
  return (
    <div className="relative group flex flex-col gap-3 items-center">
      <video
        className="lg:w-[700px] rounded-xl"
        src={project.video}
        autoPlay
        muted
        loop
      />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl dark:text-white">{project.title}</h2>
        <p className="text-lg dark:text-white opacity-60">{project.type}</p>
      </div>
    </div>
  );
}

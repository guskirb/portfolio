import ProjectThumb from "./project-thumb";

export default function Projects() {
  return (
    <div className="min-h-screen p-16 flex flex-col w-full justify-center items-center gap-10">
      <ProjectThumb
        video="https://res.cloudinary.com/dsfwii9g8/video/upload/v1724626903/social-media_qwzzsb.mp4"
        title="Connect Social Network Application"
      />
    </div>
  );
}

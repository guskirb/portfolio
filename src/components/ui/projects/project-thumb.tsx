interface ProjectThumbProps {
  video: string;
  title: string;
}

export default function ProjectThumb({ video, title }: ProjectThumbProps) {
  return (
    <div className="relative group">
      <video
        className="w-[600px] rounded-3xl"
        src={video}
        autoPlay
        muted
        loop
      />
      <div className="hidden group-hover:flex top-0 absolute h-full w-full items-center justify-center">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

import { FlipWords } from "./flip-words";
import { HeroBg } from "./hero-bg";

export default function Hero() {

  return (
    <div className="flex flex-col dark:bg-slate-800 transition-all">
      <div className="w-full h-screen relative overflow-hidden flex justify-center items-center">
        <HeroBg />
        <div className="dark:text-white z-10 flex flex-col skew-y-[19deg] translate-x-2 cursor-default">
          <h1>Hi! I'm Gus.</h1>
          <h1>
            A<FlipWords words={["full-stack", "front-end", "back-end"]} />
            
          </h1>
          <h1>web developer.</h1>
        </div>
      </div>
    </div>
  );
}

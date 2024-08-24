import { FlipWords } from "./flip-words";
import { HeroBg } from "./hero-bg";

export default function Hero() {
  return (
    <div className="flex flex-col duration-700 h-full">
      <div className="w-full h-full relative overflow-hidden flex justify-center items-center">
        <HeroBg />
        <div className="pointer-events-none dark:text-white z-10 flex flex-col skew-y-[19deg] translate-x-2 duration-700">
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

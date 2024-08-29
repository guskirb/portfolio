import { Link } from "react-scroll";

import MotionDiv from "../motion-div";
import { FlipWords } from "./flip-words";
import { HeroBg } from "./hero-bg";

export default function Hero() {
  return (
    <div className="flex flex-col duration-700 h-full">
      <div className="w-full h-full relative overflow-hidden flex justify-center items-center">
        <HeroBg />
        <MotionDiv>
          <div className="pointer-events-none dark:text-white z-10 flex flex-col skew-y-[19deg] duration-700 text-xs lg:text-xl">
            <h1>
              Hi!<span className="wave">👋</span>I'm Gus,
            </h1>
            <h1>
              a<FlipWords words={["full-stack", "front-end", "back-end"]} />
            </h1>
            <h1>web developer.</h1>
          </div>
        </MotionDiv>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="arrow cursor-pointer"
        />
      </div>
    </div>
  );
}

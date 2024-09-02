import { Link } from "react-scroll";

import MotionDiv from "../motion-div";
import { FlipWords } from "./flip-words";
import { HeroBg } from "./hero-bg";
import { useEffect, useState } from "react";
import { HeroBgStatic } from "./hero-bg-static";

export default function Hero() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  return (
    <div className="flex flex-col duration-700 h-full">
      <div className="w-full h-full relative overflow-hidden flex justify-center items-center">
        {width > 800 ? <HeroBg /> : <HeroBgStatic />}
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

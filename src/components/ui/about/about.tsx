import { Tooltip } from "react-tooltip";

import { Highlight } from "../highlight/highlight-text";
import MotionDiv from "../motion-div";

export default function About() {
  return (
    <div className="transition-all min-h-screen flex flex-col gap-20 justify-center items-center dark:text-white p-12">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col items-center">
          <MotionDiv delay={0.2}>
            <h2 className="text-4xl font-medium dark:text-white">About Me</h2>
          </MotionDiv>
        </div>
        <MotionDiv delay={0.3}>
          <p className="text-center font-regular text-xl lg:text-2xl w-3/4 lg:w-1/2">
            I am a full-stack web developer with a passion for building{" "}
            <b>visually stunning</b> and <b>highly functional</b> applications.
          </p>
        </MotionDiv>
        <MotionDiv delay={0.4}>
          <p className="text-center font-regular text-xl lg:text-2xl w-[90%] lg:w-1/2">
            My interest in web development began at the age of 14 when I created
            a blog that eventually grew to attract over 80,000 followers. Since
            then, I've been dedicated to expanding my knowledge and remain eager
            to learn.
          </p>
        </MotionDiv>
        <MotionDiv delay={0.5}>
          <p className="text-center font-regular text-xl lg:text-2xl w-3/4 lg:w-1/2">
            When I'm not coding I'm probably at the gym or hanging out with my
            cat.😸
          </p>
        </MotionDiv>
      </div>
      <MotionDiv delay={0.6}>
        <div className="flex flex-col gap-1 justify-center items-center w-3/4 lg:w-1/2">
          <p className="text-xl lg:text-2xl">Get in touch:</p>
          <Tooltip className="z-20" id="email" float>
            Click to copy
          </Tooltip>
          <Highlight>
            <p
              data-tooltip-id="email"
              onClick={() => {
                navigator.clipboard.writeText("guskirb@gmail.com");
              }}
              className="text-2xl lg:text-3xl cursor-pointer"
            >
              <b>guskirb@gmail.com</b>
            </p>
          </Highlight>
          <ul className="flex gap-8 mt-3">
            <Tooltip id="githublogo" float>
              GitHub
            </Tooltip>
            <MotionDiv delay={0.7}>
              <a href="https://github.com/guskirb" data-tooltip-id="githublogo">
                <li className="gitHubLogo hover:scale-[1.1] duration-700" />
              </a>
            </MotionDiv>
            <Tooltip id="linkedin" float>
              LinkedIn
            </Tooltip>
            <MotionDiv delay={0.8}>
              <a
                href="https://linkedin.com/in/guskirb"
                data-tooltip-id="linkedin"
              >
                <li className="linkedInLogo hover:scale-[1.1] duration-700" />
              </a>
            </MotionDiv>
            <Tooltip id="leetcode" float>
              LeetCode
            </Tooltip>
            <MotionDiv delay={0.9}>
              <a
                href="https://leetcode.com/u/guskirb/"
                data-tooltip-id="leetcode"
              >
                <li className="leetCodeLogo hover:scale-[1.1] duration-700" />
              </a>
            </MotionDiv>
          </ul>
        </div>
      </MotionDiv>
    </div>
  );
}

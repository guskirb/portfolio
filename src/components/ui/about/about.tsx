import { Tooltip } from "react-tooltip";
import { Highlight } from "../highlight/highlight-text";
import MotionDiv from "../motion-div";

export default function About() {
  return (
    <div className="transition-all min-h-screen flex flex-col gap-20 justify-center items-center dark:text-white p-12">
      <div className="flex flex-col gap-10 justify-center items-center">
        <MotionDiv>
          <p className="text-center text-2xl lg:text-4xl w-3/4 lg:w-1/2">
            I am a full-stack web developer with a passion for building{" "}
            <b>visually stunning</b> and <b>highly functional</b> applications.
          </p>
        </MotionDiv>
        <MotionDiv delay={0.3}>
          <p className="text-center text-xl lg:text-3xl w-3/4 lg:w-1/2">
            When I'm not coding I'm probably at the gym or hanging out with my
            cat.😸
          </p>
        </MotionDiv>
      </div>
      <MotionDiv delay={0.4}>
        <div className="flex flex-col gap-1 justify-center items-center w-3/4 lg:w-1/2">
          <p className="text-xl lg:text-2xl">Get in touch</p>
          <Tooltip className="z-20" id="email" float>
            Click to copy
          </Tooltip>
          <Highlight>
            <p
              data-tooltip-id="email"
              onClick={() => {
                navigator.clipboard.writeText("guskirb@gmail.com");
              }}
              className="text-2xl lg:text-4xl cursor-pointer"
            >
              <b>guskirb@gmail.com</b>
            </p>
          </Highlight>
        </div>
      </MotionDiv>
    </div>
  );
}

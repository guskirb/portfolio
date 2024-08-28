import ReactCurvedText from "react-curved-text";

import BackEnd from "./back-end";
import FrontEnd from "./front-end";
import Languages from "./languages";
import Tools from "./tools";
import MotionDiv from "../motion-div";

export default function Skills() {
  return (
    <div className="p-12 flex flex-col w-full justify-center items-center gap-10 min-h-screen">
      <div className="transition-all hidden lg:block pointer-events-none translate-x-[220px] -translate-y-[265px] absolute">
        <MotionDiv>
          <ReactCurvedText
            startOffset={10}
            width={300}
            height={300}
            text="My Skills"
            cx={150}
            cy={150}
            rx={65}
            ry={113}
            textProps={{ style: { fontSize: "2.25rem" } }}
            tspanProps={{ dy: 35 }}
          />
        </MotionDiv>
      </div>

      <h2 className="lg:hidden text-4xl dark:text-white">My Skills</h2>
      <div className="transition-all flex gap-10 flex-wrap justify-center lg:-translate-x-[100px]">
        <Languages />
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <FrontEnd />
        <BackEnd />
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <Tools />
      </div>
    </div>
  );
}

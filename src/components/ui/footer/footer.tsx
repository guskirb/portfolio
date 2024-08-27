import { Mail } from "lucide-react";
import { Tooltip } from "react-tooltip";

export default function Footer() {
  return (
    <div className="mt-[100px] relative w-full dark:bg-neutral-100 bg-neutral-900 text-white dark:text-[#262626] flex flex-col gap-10 justify-center items-center p-20">
    <svg className="waveSvg"/>
      <h1>Contact Me</h1>
      <div>
        <ul className="flex gap-8">
          <Tooltip id="githublogo" float>
            GitHub
          </Tooltip>
          <a href="https://github.com/guskirb" data-tooltip-id="githublogo">
            <li className="shadow-md gitHubLogo hover:scale-[1.1] transition-all" />
          </a>
          <Tooltip id="linkedin" float>
            LinkedIn
          </Tooltip>
          <a href="https://linkedin.com/in/guskirb" data-tooltip-id="linkedin">
            <li className="shadow-md linkedInLogo hover:scale-[1.1] transition-all" />
          </a>
          <Tooltip id="emailcontact" float>
            Email
          </Tooltip>
          <li
            data-tooltip-id="emailcontact"
            className="shadow-md cursor-pointer hover:scale-[1.1] transition-all w-[40px] h-[40px] rounded-xl flex justify-center items-center dark:text-white text-[#262626] bg-neutral-100 dark:bg-neutral-900"
            onClick={() => {
              window.location.href = "mailto:guskirb@gmail.com";
            }}
          >
            <Mail strokeWidth={2.5} size={28} />
          </li>
          <Tooltip id="leetcode" float>
            LeetCode
          </Tooltip>
          <a href="https://leetcode.com/u/guskirb/" data-tooltip-id="leetcode">
            <li className="shadow-md leetCodeLogo hover:scale-[1.1] transition-all" />
          </a>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <p className="opacity-60">© 2024 Angus Kirby</p>
        <p className="text-sm opacity-60">
          Made with love using React and Tailwind
        </p>
      </div>
    </div>
  );
}

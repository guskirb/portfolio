import { House, Lightbulb, PencilRuler } from "lucide-react";
import { Link } from "react-scroll";
import { Tooltip } from "react-tooltip";

export default function NavBar() {
  return (
    <div className="dark:text-white fixed right-5 lg:right-10 top-1/2 bottom-1/2 z-20 flex flex-col gap-8">
      <Tooltip id="home">Home</Tooltip>
      <Link
        activeClass="active"
        to="hero"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:scale-150 transition-all cursor-pointer opacity-70 hover:opacity-100"
        data-tooltip-id="home"
      >
        <h2 className="hidden lg:block">Home</h2>
        <House className="block lg:hidden" />
      </Link>
      <Tooltip id="skills">Skills</Tooltip>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:scale-150 transition-all cursor-pointer opacity-70 hover:opacity-100"
        data-tooltip-id="skills"
      >
        <h2 className="hidden lg:block">Skills</h2>
        <PencilRuler className="block lg:hidden" />
      </Link>
      <Tooltip id="projects">Projects</Tooltip>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:scale-150 transition-all cursor-pointer opacity-70 hover:opacity-100"
        data-tooltip-id="projects"
      >
        <h2 className="hidden lg:block">Projects</h2>
        <Lightbulb className="block lg:hidden" />
      </Link>
    </div>
  );
}
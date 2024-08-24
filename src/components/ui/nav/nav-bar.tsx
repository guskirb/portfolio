import { House, PencilRuler } from "lucide-react";
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
        <House />
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
        <PencilRuler />
      </Link>
    </div>
  );
}

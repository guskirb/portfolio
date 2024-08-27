import { House, Lightbulb, Mail, PencilRuler, UserRound } from "lucide-react";
import { Link } from "react-scroll";
import { Tooltip } from "react-tooltip";

export default function NavBar() {
  return (
    <div className="dark:text-white h-fit fixed right-3 lg:right-5 top-1/2 -translate-y-[50%] z-20 flex flex-col gap-8">
      <Tooltip id="home">Home</Tooltip>
      <Link
        activeClass="active"
        to="hero"
        spy={true}
        smooth={true}
        duration={500}
        className="duration-700 bg-neutral-100 dark:bg-neutral-900 p-1 lg:px-2 rounded-lg hover:scale-125 cursor-pointer opacity-70 hover:opacity-100"
        data-tooltip-id="home"
      >
        <h2 className="hidden lg:block text-center">Home</h2>
        <House size={20} className="block lg:hidden" />
      </Link>
      <Tooltip id="about">About</Tooltip>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        className="duration-700 bg-neutral-100 dark:bg-neutral-900 p-1 lg:px-2 rounded-lg hover:scale-125 cursor-pointer opacity-70 hover:opacity-100"
        data-tooltip-id="about"
      >
        <h2 className="hidden lg:block text-center">About</h2>
        <UserRound size={20} className="block lg:hidden" />
      </Link>
      <Tooltip id="skills">Skills</Tooltip>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        duration={500}
        className="duration-700 bg-neutral-100 dark:bg-neutral-900 p-1 lg:px-2 rounded-lg hover:scale-125 cursor-pointer opacity-70 hover:opacity-100"
        data-tooltip-id="skills"
      >
        <h2 className="hidden lg:block text-center">Skills</h2>
        <PencilRuler size={20} className="block lg:hidden" />
      </Link>
      <Tooltip id="projects">Projects</Tooltip>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        className="duration-700 bg-neutral-100 dark:bg-neutral-900 p-1 lg:px-2 rounded-lg hover:scale-125 cursor-pointer opacity-70 hover:opacity-100"
        data-tooltip-id="projects"
      >
        <h2 className="hidden lg:block text-center">Projects</h2>
        <Lightbulb size={20} className="block lg:hidden" />
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        className="duration-700 bg-neutral-100 dark:bg-neutral-900 p-1 lg:px-2 rounded-lg hover:scale-125 cursor-pointer opacity-70 hover:opacity-100"
        data-tooltip-id="projects"
      >
        <h2 className="hidden lg:block text-center">Contact</h2>
        <Mail size={20} className="block lg:hidden" />
      </Link>
    </div>
  );
}

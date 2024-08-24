import { Element } from "react-scroll";
import Hero from "../../components/ui/hero/hero";
import NavBar from "../../components/ui/nav/nav-bar";
import Skills from "../../components/ui/skills/skills";
import ThemeButton from "../../components/ui/theme-button/theme-button";

export default function Home() {
  return (
    <div className="relative bg-neutral-100 dark:bg-neutral-900 duration-700">
      <Element name="hero">
        <div className="h-screen">
          <div className="hero-bg" />
          <Hero />
        </div>
      </Element>
      <Element name="skills" className="skills">
        <Skills />
      </Element>
      <ThemeButton />
      <NavBar />
    </div>
  );
}

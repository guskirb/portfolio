import Hero from "../../components/ui/hero/hero";
import ThemeButton from "../../components/ui/theme-button/theme-button";

export default function Home() {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 duration-700">
      <div className="p-4 lg:p-12 h-screen">
        <Hero />
      </div>
      <ThemeButton />
    </div>
  );
}

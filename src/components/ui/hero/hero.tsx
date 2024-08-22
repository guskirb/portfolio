import useTheme from "../../../hooks/useTheme";
import { HeroBg } from "./hero-bg";

export default function Hero() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col dark:bg-slate-800">
      <div className="w-full h-screen relative overflow-hidden">
        <HeroBg />
      </div>
      <div className="bg-white w-full h-[100px]">

      </div>
    </div>
  );
}

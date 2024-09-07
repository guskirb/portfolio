import { Tooltip } from "react-tooltip";
import useTheme from "../../../hooks/useTheme";

export default function ThemeButton() {
  const { darkMode, setDarkMode, animation, setAnimation } = useTheme();

  return (
    <div className="fixed z-20 top-5 right-5 flex flex-col gap-5 items-center">
      <Tooltip id="darkmode">Dark Mode</Tooltip>
      <label
        className="themeContainer"
        title={darkMode ? "Activate light mode" : "Activate dark mode"}
        aria-label={darkMode ? "Activate light mode" : "Activate dark mode"}
        data-tooltip-id="darkmode"
      >
        <input
          type="checkbox"
          defaultChecked={!darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <div />
      </label>
      <Tooltip id="animations">Animations</Tooltip>
      <div className="scale-[0.7]" data-tooltip-id="animations">
        <label className="switch">
          <input
            type="checkbox"
            defaultChecked={animation}
            onChange={() => setAnimation(!animation)}
          />
          <div>
            <span></span>
          </div>
        </label>
      </div>
    </div>
  );
}

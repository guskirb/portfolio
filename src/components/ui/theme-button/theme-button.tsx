import useTheme from "../../../hooks/useTheme";

export default function ThemeButton() {
  const { darkMode, setDarkMode, animation, setAnimation } = useTheme();

  return (
    <div className="fixed z-20 top-5 right-5 flex flex-col gap-3">
      <label
        className="themeContainer"
        title={darkMode ? "Activate light mode" : "Activate dark mode"}
        aria-label={darkMode ? "Activate light mode" : "Activate dark mode"}
      >
        <input
          type="checkbox"
          defaultChecked={!darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <div />
      </label>
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
  );
}

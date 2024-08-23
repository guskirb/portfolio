import useTheme from "../../../hooks/useTheme";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="fixed right-5 top-5"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme}
    </button>
  );
}

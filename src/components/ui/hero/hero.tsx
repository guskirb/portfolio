import useTheme from "../../../hooks/useTheme";

export default function Hero() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Theme
    </button>
  );
}

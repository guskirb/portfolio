import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export interface IThemeContext {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<IThemeContext>({
  darkMode: false,
  setDarkMode: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(localStorage.theme ? true : false);

  useEffect(() => {
    setLocalStorageTheme(darkMode);
  }, [darkMode]);

  const setLocalStorageTheme = (mode: boolean) => {
    if (mode) {
      document.querySelector("body")?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.querySelector("body")?.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

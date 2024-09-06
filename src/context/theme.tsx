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
  animation: boolean;
  setAnimation: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<IThemeContext>({
  darkMode: false,
  setDarkMode: () => {},
  animation: true,
  setAnimation: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(localStorage.theme ? true : false);
  const [animation, setAnimation] = useState(
    localStorage.animation ? false : true
  );

  useEffect(() => {
    setLocalStorageTheme(darkMode);
  }, [darkMode]);

  useEffect(() => {
    setAnimationTheme(animation);
  }, [animation]);

  const setLocalStorageTheme = (mode: boolean) => {
    if (mode) {
      document.querySelector("body")?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.querySelector("body")?.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  };

  const setAnimationTheme = (mode: boolean) => {
    if (mode) {
      localStorage.removeItem("animation");
    } else {
      localStorage.setItem("animation", "false");
    }
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode, setDarkMode, animation, setAnimation }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

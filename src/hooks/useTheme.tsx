import { useContext } from "react";
import { IThemeContext, ThemeContext } from "../context/theme";

export default function useTheme() {
  return useContext<IThemeContext>(ThemeContext);
}

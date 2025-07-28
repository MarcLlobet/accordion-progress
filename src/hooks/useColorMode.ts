import { useAppState } from "./useAppState";
import { useDispatch } from "./useDispatch";
import { setColorMode } from "../state";
import type { ColorMode } from "../types";

export const useColorMode = () => {
  const dispatch = useDispatch();
  const { colorMode } = useAppState();

  const toggleColorMode = () => {
    const newColorMode: ColorMode = colorMode === "light" ? "dark" : "light";

    const colorSchemaMeta = document
      .getElementsByName("color-scheme")
      .item(0) as HTMLElement & { content: ColorMode };

    colorSchemaMeta?.setAttribute("content", newColorMode);
    document.documentElement.style.setProperty("--colorMode", newColorMode);

    dispatch(setColorMode(newColorMode));
  };

  return {
    isColorModeLight: colorMode === "light",
    colorMode,
    toggleColorMode,
  };
};

import { createGlobalStyle } from "styled-components";
import SourceSans3VariableFont from "@fontsource-variable/source-sans-3/files/source-sans-3-latin-wght-normal.woff2?url";

const lightModeColors = {
  darkGray: "#333",
  lightGray: "#eee",
  silver: "#999",
  white: "#fff",
  middleGray: "#cccccc",
  green: "#02bc9c",
  lightGreen: "#e6fdf9",
} as const;

const darkModeColors = {
  almostWhite: "#e4e4e4",
  brokenBlack: "#171717",
  almostBlack: "#9a9a9a",
  black: "#000",
  contrastGray: "#3f3f3f",
  pink: "#e200c8",
  lightPink: "#74005a",
} as const;

const allColors = {
  ...lightModeColors,
  ...darkModeColors,
};

const colorCssVariables = [
  "text",
  "background",
  "innerBackground",
  "subtleText",
  "border",
  "key",
  "subtleKey",
] as const;

type ColorCssVariables = (typeof colorCssVariables)[number];

const lightModeColorNames: Record<
  ColorCssVariables,
  keyof typeof lightModeColors
> = {
  text: "darkGray",
  background: "lightGray",
  innerBackground: "white",
  subtleText: "silver",
  border: "middleGray",
  key: "green",
  subtleKey: "lightGreen",
} as const;

const darkModeColorNames: Record<
  ColorCssVariables,
  keyof typeof darkModeColors
> = {
  text: "almostWhite",
  background: "brokenBlack",
  innerBackground: "black",
  subtleText: "almostBlack",
  border: "contrastGray",
  key: "pink",
  subtleKey: "lightPink",
} as const;

const getCssColors = (cssMap: Record<string, string>) =>
  Object.entries(cssMap).map(
    ([key, value]) => `
    --${key}: ${value};
  `,
  );

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Source Sans 3 Variable';
    font-style: normal;
    font-display: auto;
    font-weight: 200 900;
    src: url(${SourceSans3VariableFont}) format('woff2-variations');
    unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
  }
  :root {
    font-family: 'Source Sans 3 Variable', system-ui, sans-serif;
    font-variation-settings: "wdth" 400, "wght" 500 "wght" 700;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    --colorMode: light;
    color-scheme: var(--colorMode);

    ${getCssColors(allColors).join(" ")}

    ${colorCssVariables
      .map(
        (colorKey) =>
          `--${colorKey}: light-dark(
        var(--${lightModeColorNames[colorKey]}), 
        var(--${darkModeColorNames[colorKey]})
      );`,
      )
      .join(" ")}
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;

    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: var(--text);
    background-color: var(--background);
  }

  button {
    appearance: none;
    font-family: inherit;
    background: transparent;
    color: inherit;
    border: 0;
  }

  button:focus-visible {
    outline-color: var(--key);
  }

  #root {
    width: 100%;
    min-height: 100dvh;
    display: flex;
    padding: 16px;
  }

  * {
    box-sizing: border-box;
  }
`;

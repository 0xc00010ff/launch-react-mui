import { deepmerge } from "@mui/utils";
import { experimental_extendTheme as extendMuiTheme } from "@mui/material/styles";
import { extendTheme as extendJoyTheme } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface PaletteBackground {
    appBody: string;
    componentBg: string;
  }
}

// We need to copy default theme properties from Material UI to use Transitions without error
const muiTheme = extendMuiTheme();

// This is our actual custom theme
const joyTheme = extendJoyTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          appBody: "var(--joy-palette-neutral-50)",
          componentBg: "var(--joy-palette-common-white)",
        },
      },
    },
    dark: {
      palette: {
        background: {
          appBody: "var(--joy-palette-common-black)",
          componentBg: "var(--joy-palette-neutral-900)",
        },
      },
    },
  },
  fontFamily: {
    display: "'Roboto Flex', var(--joy-fontFamily-fallback)",
    body: "'Inter', var(--joy-fontFamily-fallback)",
  },
});

const ThemeOverrides = deepmerge(muiTheme, joyTheme);

export default ThemeOverrides;

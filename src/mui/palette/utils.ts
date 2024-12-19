import type { PaletteColor, SimplePaletteColorOptions } from "@mui/material/styles/createPalette";
import createTheme from "@mui/material/styles/createTheme";

/** Inspiration: https://stackoverflow.com/questions/46486565/material-ui-customize-button-color */
const augmentColor = createTheme().palette.augmentColor;

/** Inspiration: https://stackoverflow.com/questions/46486565/material-ui-customize-button-color */
const createCustomColor = <T extends string>(
  name: T,
  mainColor: SimplePaletteColorOptions["main"],
  variants?: Omit<SimplePaletteColorOptions, "main">
): PaletteColor =>
  augmentColor({
    name,
    color: {
      main: mainColor,
      // light: variants?.light,
      light: variants?.light,
      dark: variants?.dark,
      contrastText: variants?.contrastText,
    },
  });

export default createCustomColor;

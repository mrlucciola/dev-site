import type { PaletteColorOptions } from "@mui/material/styles/createPalette";
// import { alpha } from "@mui/system/colorManipulator";
// utils
// import createCustomColor from "./utils";
// interfaces
import type { CustomOptions, CustomOptionsTrue } from "./interfaces";

/** @note See: [MUI 6: `colorSchemes`](https://mui.com/material-ui/customization/palette/#color-schemes) */
export const customPalette: CustomPalette = {
  // primary: createCustomColor("primary", alpha("rgb(39, 40, 51)", 0.0), {
  //   contrastText: "rgba(250, 250, 250, 0.08)",
  // }),
};
/** @note This needs to be updated alongside `customPalette` */
type CustomPaletteKey = any; // "primary";
type CustomPalette = { [key in CustomPaletteKey]: PaletteColorOptions };

// Modify declarations
declare module "@mui/material" {
  interface ColorSchemeOverrides extends CustomOptionsTrue<CustomPalette> {}
  interface SimplePaletteColorOptions extends CustomOptionsTrue<CustomPalette> {}
}

declare module "@mui/material/styles" {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomOptions<CustomPalette> {}
  interface SimplePaletteColorOptions extends CustomOptions<CustomPalette> {}
}

declare module "@mui/material/styles/createPalette" {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomOptions<CustomPalette> {}
  interface SimplePaletteColorOptions extends CustomOptions<CustomPalette> {}
}

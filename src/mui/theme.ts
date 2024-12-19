import createTheme from "@mui/material/styles/createTheme";
import type { Theme } from "@mui/material/styles/createThemeNoVars";
import type { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import {} from "@mui/material-pigment-css";
import type {} from "@mui/lab/themeAugmentation";

/** See: https://mui.com/material-ui/migration/migrating-to-pigment-css/#migrating-custom-theme */
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  cssVariables: true,
  colorSchemes: { dark: true, light: false, primary: {} }, // colorSchemes: { dark: true },
});

// @note Unsure how this is used:
// const pigmentConfig = {
//   transformLibraries: ["@mui/material"],
//   theme: darkTheme,
// };

declare module "@mui/material-pigment-css" {
  interface ThemeArgs {
    theme: Theme;
  }
}

declare global {
  namespace React {
    interface HTMLAttributes<T> {
      sx?: SxProps<Theme>;
    }
    interface SVGProps<T> {
      sx?: SxProps<Theme>;
    }
  }
}

import createTheme from "@mui/material/styles/createTheme";
import {} from "@mui/material-pigment-css";
import { Theme } from "@mui/material/styles/createThemeNoVars";

/** See: https://mui.com/material-ui/migration/migrating-to-pigment-css/#migrating-custom-theme */
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  cssVariables: true,
  colorSchemes: { dark: true },
});

declare module "@mui/material-pigment-css" {
  interface ThemeArgs {
    theme: Theme;
  }
}

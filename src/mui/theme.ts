import createTheme from "@mui/material/styles/createTheme";
import type {} from "@mui/lab/themeAugmentation";
import { componentDefaults } from "./componentOverrides";

/** See: https://mui.com/material-ui/migration/migrating-to-pigment-css/#migrating-custom-theme */
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },

  components: componentDefaults,
  cssVariables: true,
  // @ts-ignore
  colorSchemes: { dark: true },
});

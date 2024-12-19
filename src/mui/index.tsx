import type { FC, PropsWithChildren } from "react";
// mui
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import DefaultPropsProvider from "@mui/material/DefaultPropsProvider";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import type {} from "@mui/lab/themeAugmentation";
// local
import { darkTheme } from "./theme";
import { componentDefaults } from "./componentOverrides";
// style
import "@mui/material-pigment-css/styles.css";
import "./index.css";

const muiCache = createCache({ key: "css", prepend: true });

/** ###  */
const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  // @note testing out cache provider
  <CacheProvider value={muiCache}>
    <ThemeProvider theme={darkTheme}>
      <DefaultPropsProvider value={componentDefaults}>
        <CssBaseline />
        {children}
      </DefaultPropsProvider>
    </ThemeProvider>
  </CacheProvider>
);

export default MuiThemeProvider;

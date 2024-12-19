import { FC, PropsWithChildren } from "react";
// mui
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import DefaultPropsProvider from "@mui/material/DefaultPropsProvider";
// local
import { darkTheme } from "./theme";
// style
import "@mui/material-pigment-css/styles.css";
import "./mui/index.css";

/** ###  */
const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={darkTheme}>
    <DefaultPropsProvider value={{}}></DefaultPropsProvider>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default MuiThemeProvider;

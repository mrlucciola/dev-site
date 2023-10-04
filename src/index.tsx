import ReactDOM from "react-dom/client";
// mui
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { darkTheme } from "./mui/theme";
// state
import { StoreProvider } from "./mobx/provider";
// components
import App from "./App";
// style
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // {/* <React.StrictMode> */}
  <StoreProvider>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StoreProvider>
  // {/* </React.StrictMode> */}
);

import ReactDOM from "react-dom/client";
// components
import App from "./components/App";
// style
import MuiThemeProvider from "./mui";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

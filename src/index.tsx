import ReactDOM from "react-dom/client";
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
    <App />
  </StoreProvider>
  // {/* </React.StrictMode> */}
);

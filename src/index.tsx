// react
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
// state
import AppContext, { RootStore } from "./mobx/context";
// components
import App from "./App";
// utils
// styling
import "./App.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

/**
 * main
 * TODO: incorporate <HashRouter>
 */
root.render(
  <>
    {/* <React.StrictMode> */}
    <AppContext.Provider value={new RootStore()}>
      <HashRouter>
        <App />
      </HashRouter>
    </AppContext.Provider>
    {/* </React.StrictMode> */}
  </>
);

// react
import ReactDOM from "react-dom/client";
// redux
import { Provider } from "react-redux";
import store from "./redux/store";
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
 */
root.render(
  <>
    {/* <React.StrictMode> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </React.StrictMode> */}
  </>
);

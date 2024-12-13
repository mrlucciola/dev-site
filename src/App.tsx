import { FC } from "react";
import mermaid from "mermaid";
// mui
import Grid from "@mui/material/Unstable_Grid2";
// components
import Body from "./components/Body";
import Nav from "./components/Nav";
// state
import { AppProvider } from "./AppProvider";

mermaid.initialize({ startOnLoad: true });

/** ### App entrypoint */
const App: FC = () => (
  <AppProvider>
    <Grid
      className="App"
      container
      direction="column"
      sx={{
        height: "100vh",
        minHeight: "100vh",
        maxHeight: "100vh",
        width: "100vw",
        maxWidth: "100vw",
        minWidth: "100vw",
        flexwrap: "nowrap",
        wrap: "nowrap",
      }}
    >
      <Nav />
      <Body />
    </Grid>
  </AppProvider>
);

export default App;

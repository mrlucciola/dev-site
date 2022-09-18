// react
import { useEffect } from "react";
// style
import { Grid } from "@mui/material";
// state
import { observer } from "mobx-react-lite";
import { useCtx } from "./mobx/context";
import { MainStore } from "./mobx/stores/MainStore";
// components
import Body from "./components/Body";
import Nav from "./components/Nav";
// seed
import { projectsArr } from "./seed/projectsArr";

/**
 * Sets the state on first render with seed data and displays the entire page view
 */
const App: React.FC = () => {
  useInitAppState();

  return (
    <Grid
      container
      direction="column"
      className="App"
      sx={{
        height: "100vh",
        minHeight: "100vh",
        maxHeight: "100vh",
        width: "100vw",
        maxWidth: "100vw",
        minWidth: "100vw",
      }}
    >
      <Nav />
      <Body />
    </Grid>
  );
};

export default observer(App);

function useInitAppState() {
  // state: actions
  const setProjects: MainStore["setProjects"] = useCtx(
    (s) => s.main.setProjects
  );

  // effects
  useEffect(() => {
    setProjects(projectsArr);
  }, []);
}

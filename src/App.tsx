// react
import { FC, useEffect } from "react";
// style
// state
import { useAppContext } from "./mobx/context";
import { MainStore } from "./mobx/stores/main";
// components
import Body from "./components/body";
import Nav from "./components/Nav";
// seed
import { projectsArr } from "./seed/projectsArr";
import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";

/**
 * main
 */
const App: FC = () => {
  // state
  const setProjects: MainStore["setProjects"] = useAppContext(
    (s) => s.main.setProjects
  );

  // effects
  useEffect(() => {
    setProjects(projectsArr);
  }, []);

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

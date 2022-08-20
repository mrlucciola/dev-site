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
    <Grid container direction="column" className="App">
      <Nav />
      <Body />
    </Grid>
  );
};

export default observer(App);

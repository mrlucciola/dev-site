// react
import { FC, useState } from "react";
// style
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";

// state
import { observer } from "mobx-react-lite";
import { useAppContext } from "../../mobx/context";
// types
import NavProject from "./NavProject";

/**
 * main
 */
const NavProjects: FC = () => {
  // state
  const activeProjectId: number = useAppContext((s) => s.main.activeProjectId);
  const projectLen: number = useAppContext((s) => s.main.projects).length;
  // create the element array
  const projectElems = Array.from(Array(projectLen).keys()).map((idx) => {
    return <NavProject projectIdx={idx} key={`nproj-${idx}`} />;
  });

  return (
    <Grid item container direction="row" xs={true}>
      <Tabs
        value={activeProjectId}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {projectElems}
      </Tabs>
    </Grid>
  );
};

export default observer(NavProjects);

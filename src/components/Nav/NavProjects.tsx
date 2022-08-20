// react
import { FC } from "react";
// style
import Grid from "@mui/material/Grid";
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
  const projectLen: number = useAppContext((s) => s.main.projects).length;
  // create the element array
  const projectElems = Array.from(Array(projectLen).keys()).map((idx) => {
    return <NavProject projectIdx={idx} key={`nproj-${idx}`} />;
  });

  return (
    <Grid
      item
      container
      // className="projectElemList"
    >
      {projectElems}
    </Grid>
  );
};

export default observer(NavProjects);

// react
import { FC } from "react";
// style
import { Grid } from "@mui/material";
// state
import { useAppContext } from "../../mobx/context";
// components
import ProjectCard from "./ProjectCard";
import { observer } from "mobx-react-lite";

/**
 * main
 */
const ProjectList: FC = () => {
  // state
  const projectArrLen: number = useAppContext((s) => s.main.projects).length;

  // build the array of elements
  // Array.from(Array(projectLen).keys())
  const projectElems = Array.from(Array(projectArrLen).keys()).map((idx) => {
    return <ProjectCard projectIdx={idx} key={idx} />;
  });

  return (
    <Grid
      item
      container
      // className="ProjectList"
    >
      {projectElems}
    </Grid>
  );
};

export default observer(ProjectList);

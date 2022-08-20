// react
import { FC } from "react";
// style
import { Grid } from "@mui/material";
// state
import { useAppContext } from "../../mobx/context";
import { Project } from "../../mobx/types";
// components
import ProjectCard from "./ProjectCard";
import { observer } from "mobx-react-lite";

/**
 * main
 */
const ProjectList: FC = () => {
  // state
  const projectArr: Project[] = useAppContext((s) => s.main.projects);

  // build the array of elements
  const projectElems = projectArr.map((_, idx) => {
    return <ProjectCard projectIdx={idx} key={idx} />;
  });

  return (
    <Grid item container className="ProjectList">
      {projectElems}
    </Grid>
  );
};

export default observer(ProjectList);

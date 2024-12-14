import { FC } from "react";
// mui
import Grid from "@mui/material/Unstable_Grid2";
import List from "@mui/material/List";
// components
import ProjectCard from "../ProjectCard";
// state
import { projectsForDisplay } from "../../projectConfigs";

/** ### Page body - list of elements */
const Body: FC = () => {
  // Build elems
  const projectElems = projectsForDisplay.map((projectKey) => (
    <ProjectCard projectKey={projectKey} key={projectKey} />
  ));

  return (
    <Grid component={List} direction="column" overflow="scroll" wrap="nowrap">
      {projectElems}
    </Grid>
  );
};

export default Body;

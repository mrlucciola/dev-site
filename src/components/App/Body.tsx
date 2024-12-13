import { FC } from "react";
// mui
import Grid from "@mui/material/Unstable_Grid2";
import List from "@mui/material/List";
// state
import { observer } from "mobx-react-lite";
import { useMainStore } from "../../mobx/stores";
// components
import ProjectCard from "../ProjectCard";

/** ### Page body
 */
const Body: FC = () => {
  // state
  const projectsLen = useMainStore((s) => s.projects.length);

  // build
  const projectElems = [];
  for (let projectIdx = 0; projectIdx < projectsLen; projectIdx++) {
    projectElems.push(<ProjectCard projectIdx={projectIdx} key={projectIdx} />);
  }

  return (
    <Grid component={List} flexWrap="wrap" direction="column" overflow="scroll">
      {projectElems}
    </Grid>
  );
};

export default observer(Body);

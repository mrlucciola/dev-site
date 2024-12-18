import { FC } from "react";
// mui
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
// components
import StackToolLayout from "./StackToolLayout";
// utils
import { projectsLookup, type ProjectKey } from "../../projectConfigs";
import { type StackCategory } from "../../projectConfigs/interfaces";

/** ### List of tools/libraries used in project
 * Display component.
 */
const ProjectStackCategory: FC<{ projectKey: ProjectKey; stackCategory: StackCategory }> = ({
  projectKey,
  stackCategory,
}) => {
  const toolsArr = projectsLookup[projectKey].stack.get(stackCategory)!;
  // Build list of tool elems
  const toolsElemArr = toolsArr.map((tool: string) => (
    <StackToolLayout toolKey={tool} key={`${projectKey}-${stackCategory}-${tool}`} />
  ));

  return (
    <Grid container direction="column">
      <Grid component={Typography}>{stackCategory}</Grid>
      <Grid container direction="column">
        {toolsElemArr}
      </Grid>
    </Grid>
  );
};

export default ProjectStackCategory;

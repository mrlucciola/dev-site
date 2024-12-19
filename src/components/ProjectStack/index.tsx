import { type FC } from "react";
// mui
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
// components
import ProjectStackCategory from "./ProjectStackCategory";
// data
import { projectsLookup, type ProjectKey } from "../../projectConfigs";

/** ### Project tool-stack
 *
 * Display component which shows the stack/list of tools used in the project.
 *
 * A stack element has:
 * 1. A title;
 * 2. A list of tools;
 */
const ProjectStack: FC<{ projectKey: ProjectKey }> = ({ projectKey }) => {
  const projectStack = projectsLookup[projectKey].stack;

  // Build elems
  const stackElemArr = [];
  for (const [stackCategory, _] of projectStack) {
    stackElemArr.push(
      <ProjectStackCategory
        projectKey={projectKey}
        stackCategory={stackCategory}
        key={`${projectKey}-${stackCategory}`}
      />
    );
  }

  return (
    <Stack direction="row" spacing={2} component={CardContent}>
      {stackElemArr}
    </Stack>
  );
};

export default ProjectStack;

import { FC } from "react";
// mui
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
// components
import ProjectStackElem from "./ProjectStackElem";
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
  const project = projectsLookup[projectKey];
  const projectStack = project.stack;

  // Build elems
  const stackElemArr = [];
  for (const [key, toolsArr] of projectStack) {
    stackElemArr.push(
      <ProjectStackElem
        projectKey={key}
        toolsArr={toolsArr}
        key={`${projectKey}-gridgroup-${key}`}
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

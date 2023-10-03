import { FC } from "react";
// mui
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
// state
import { observer } from "mobx-react-lite";
import { useMainStore } from "../../mobx/stores";
// components
import ProjectStackElem from "./ProjectStackElem";

/** ### Project tool-stack
 *
 * Display component which shows the stack/list of tools used in the project.
 *
 * A stack element has:
 * 1. A title;
 * 2. A list of tools;
 */
const ProjectStack: FC<{ projectIdx: number }> = ({ projectIdx }) => {
  // state
  const projectStack = useMainStore((s) => s.projects[projectIdx]).stack;

  // build the array of elements by stack
  const stackElemArr = [];
  for (const [key, toolsArr] of projectStack) {
    stackElemArr.push(
      <ProjectStackElem
        projectKey={key}
        toolsArr={toolsArr}
        key={`gridgroup-${key}`}
      />
    );
  }

  return (
    <Stack direction="row" spacing={2} component={CardContent}>
      {stackElemArr}
    </Stack>
  );
};

export default observer(ProjectStack);

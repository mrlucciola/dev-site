import { FC } from "react";
// mui
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
// state
import { observer } from "mobx-react-lite";
import { useMainStore } from "../../mobx/stores";
// components
import ProjectStackElem from "./ProjectStackElem";

/** Display component:\
 * Holds an array of 'stack' items.
 *
 * A stack item has 1) a title; and 2) a list of tools;
 */
const ProjectStack: FC<{ projectIdx: number }> = ({ projectIdx }) => {
  // state
  const projectStack = useMainStore((s) => s.projects[projectIdx]).stack;

  // build the array of elements by stack
  const stackElemArr = [];
  for (const [_key, toolsArr] of projectStack) {
    const projectKey = String(_key);

    stackElemArr.push(
      <ProjectStackElem
        projectKey={projectKey}
        toolsArr={toolsArr}
        key={`gridgroup-${projectKey}`}
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

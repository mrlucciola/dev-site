// style
import { CardContent, Chip, ListItem, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid, { Grid2Props as GridProps } from "@mui/material/Unstable_Grid2";
// state
import { observer } from "mobx-react-lite";
import { useMainStore } from "../mobx/stores";
// @todo replace with state
import { toolsIconMap } from "../mobx/data/projectsArr";
// interfaces

type ToolProps = React.FC<
  GridProps & {
    toolStr: string;
    toolIcon: JSX.Element;
  }
>;
/** Display component:
 * Holds the name of a tool/library, with icon.
 */
const Tool: ToolProps = ({ toolStr, toolIcon }) => {
  return (
    <ListItem component="div">
      <Chip icon={toolIcon} label={toolStr as string} />
    </ListItem>
  );
};

type PSEProps = React.FC<{
  projectKey: string;
  toolsArr: string[];
}>;
/** Display component:
 * Holds the list of tools/libraries used, as well as the `stack` title.
 */
const ProjStackElem: PSEProps = ({ projectKey, toolsArr }) => {
  // list each tool in array form
  const toolsElemArr = toolsArr.map((tool: string, idx: number) => {
    // get the icon from the map in the seed file
    // @todo replace with state
    const icon = toolsIconMap[tool];

    return (
      <Tool toolIcon={icon} toolStr={tool} key={`tool${idx}-${projectKey}`} />
    );
  });
  return (
    <Grid container direction="column">
      <Grid component={Typography}>{projectKey}</Grid>
      <Grid container direction="column">
        {toolsElemArr}
      </Grid>
    </Grid>
  );
};

type Props = React.FC<{
  projectIdx: number;
}>;
/** Display component:\
 * Holds an array of 'stack' items.
 *
 * A stack item has 1) a title; and 2) a list of tools;
 */
const ProjectStack: Props = ({ projectIdx }) => {
  // state: observables
  const projectStack = useMainStore((s) => s.projects[projectIdx]).stack;

  // build the array of elements by stack
  const stackElemArr = [];
  for (const [_key, toolsArr] of projectStack) {
    const projectKey = String(_key);

    stackElemArr.push(
      <ProjStackElem
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

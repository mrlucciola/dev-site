// react
import { FC } from "react";
// style
import {
  CardContent,
  Chip,
  Grid,
  GridProps,
  ListItem,
  Typography,
} from "@mui/material";
import MuiStack from "@mui/material/Stack";
// state
import { observer } from "mobx-react-lite";
import { useAppContext } from "../../mobx/context";
import { Stack } from "../../mobx/types";
import { toolsIconMap } from "../../seed/projectsArr";

interface ToolProp extends GridProps {
  toolStr: string;
  toolIcon: JSX.Element;
}
/**
 * Display component which Holds the name of a tool/library, with icon
 */
const Tool: FC<ToolProp> = ({ toolStr, toolIcon }) => {
  return (
    <ListItem component="div">
      <Chip icon={toolIcon} label={toolStr as string} />
    </ListItem>
  );
};

interface PSEProps {
  projectKey: string;
  toolsArr: string[];
}
/**
 * Element which holds the list of tools/libraries used, as well as the stack title
 */
const ProjStackElem: FC<PSEProps> = ({ projectKey, toolsArr }) => {
  // list each tool in array form
  const toolsElemArr = toolsArr.map((tool: string, idx: number) => {
    // get the icon from the map in the seed file
    const icon = toolsIconMap[tool];
    return (
      <Tool toolIcon={icon} toolStr={tool} key={`tool${idx}-${projectKey}`} />
    );
  });
  return (
    <Grid container direction="column">
      <Grid item component={Typography}>
        {projectKey}
      </Grid>
      <Grid item container direction="column">
        {toolsElemArr}
      </Grid>
    </Grid>
  );
};

interface Props {
  projectIdx: number;
}
/**
 * Display component which holds an array of 'stack' items.
 * A stack item has 1) a title; and 2) a list of tools;
 */
const ProjectStack: FC<Props> = ({ projectIdx }) => {
  const stack: Stack = useAppContext((s) => s.main.projects[projectIdx]).stack;

  // build the array of elements by stack
  const stackElemArr = [];
  for (const [_key, toolsArr] of stack) {
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
    <MuiStack direction="row" spacing={2} component={CardContent}>
      {stackElemArr}
    </MuiStack>
  );
};

export default observer(ProjectStack);

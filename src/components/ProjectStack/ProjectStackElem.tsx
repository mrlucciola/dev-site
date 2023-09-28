import { FC } from "react";
// mui
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
// components
import Tool from "./Tool";
import { useMainStore } from "../../mobx/stores";

/** Display component:
 * Holds the list of tools/libraries used, as well as the `stack` title.
 */
const ProjectStackElem: FC<{
  projectKey: string;
  toolsArr: string[];
}> = ({ projectKey, toolsArr }) => {
  const toolsIconMap = useMainStore((s) => s.toolsIconMap);
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

export default ProjectStackElem;

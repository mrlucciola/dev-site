import { FC } from "react";
// mui
import Chip from "@mui/material/Chip";
import ListItem from "@mui/material/ListItem";

/** Display component:
 * Holds the name of a tool/library, with icon.
 */
const Tool: FC<{
  toolStr: string;
  toolIcon: JSX.Element;
}> = ({ toolStr, toolIcon }) => {
  return (
    <ListItem component="div">
      <Chip icon={toolIcon} label={toolStr as string} />
    </ListItem>
  );
};

export default Tool;

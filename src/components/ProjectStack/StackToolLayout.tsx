import { FC } from "react";
// mui
import Chip from "@mui/material/Chip";
import ListItem from "@mui/material/ListItem";
// utils
import { toolsIconMap } from "../../projectConfigs/iconMap";

/** ### Project-Stack Tool Element
 * Display component which holds the name of a single tool/library, with icon.
 */
const StackToolLayout: FC<{ toolKey: string }> = ({ toolKey }) => (
  <ListItem component="div">
    <Chip icon={toolsIconMap[toolKey]} label={toolKey} />
  </ListItem>
);

export default StackToolLayout;

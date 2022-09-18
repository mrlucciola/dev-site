// react
import { FC } from "react";
// style
import { List } from "@mui/material";
// state
import { observer } from "mobx-react-lite";
import { useCtx } from "../../mobx/context";
// components
import ProjectCard from "./ProjectCard";

/**
 * Displays list of projects.
 * Queries the state for array of projects.
 */
const ProjectList: FC = () => {
  // state
  const projectArrLen: number = useCtx((s) => s.main.projects).length;

  // build the array of elements
  const projectElems = Array.from(Array(projectArrLen).keys()).map((idx) => {
    return <ProjectCard projectIdx={idx} key={idx} />;
  });

  return <List>{projectElems}</List>;
};

export default observer(ProjectList);

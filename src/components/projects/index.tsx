// react
import { FC } from "react";
// style
import { List } from "@mui/material";
// state
import { observer } from "mobx-react-lite";
import { useAppContext } from "../../mobx/context";
// components
import ProjectCard from "./ProjectCard";

/**
 * main
 */
const ProjectList: FC = () => {
  // state
  const projectArrLen: number = useAppContext((s) => s.main.projects).length;

  // build the array of elements
  const projectElems = Array.from(Array(projectArrLen).keys()).map((idx) => {
    return <ProjectCard projectIdx={idx} key={idx} />;
  });

  return <List>{projectElems}</List>;
};

export default observer(ProjectList);

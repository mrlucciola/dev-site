import { FC } from "react";
// mui
import List from "@mui/material/List";
// state
import { observer } from "mobx-react-lite";
import { useMainStore } from "../mobx/stores";
import ProjectCard from "./ProjectCard";
// components

const Body: FC = () => {
  // state
  const projectsLen = useMainStore((s) => s.projects.length);

  // build
  const projectElems = [];
  for (let projectIdx = 0; projectIdx < projectsLen; projectIdx++) {
    projectElems.push(<ProjectCard projectIdx={projectIdx} key={projectIdx} />);
  }

  return <List>{projectElems}</List>;
};

export default observer(Body);

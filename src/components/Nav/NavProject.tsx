// react
import React, { FC, useCallback } from "react";
// style
import Tab from "@mui/material/Tab";
// state
import { observer } from "mobx-react-lite";
import { useAppContext } from "../../mobx/context";
// types
import { Project } from "../../mobx/types";
// utils
import { MainStore } from "../../mobx/stores/main";

interface Props {
  projectIdx: number;
}
/**
 * A single tab button which navigates user to a given project on click
 */
const NavProject: FC<Props> = ({ projectIdx }) => {
  // state
  const project: Project = useAppContext((s) => s.main.projects[projectIdx]);
  const setActiveProjectIdx: MainStore["setActiveProjectId"] = useAppContext(
    (s) => s.main.setActiveProjectId
  );
  // event handler
  const onClickNavToCard = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      setActiveProjectIdx(projectIdx);
      project.ref!.current!.scrollIntoView();
    },
    [project.ref]
  );

  return <Tab onClick={onClickNavToCard} label={project.title} />;
};

export default observer(NavProject);

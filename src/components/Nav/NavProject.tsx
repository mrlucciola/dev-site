// react
import React, { FC, useCallback } from "react";
// style
import Tab from "@mui/material/Tab";
// state
import { observer } from "mobx-react-lite";
import { useMainStore } from "../../mobx/stores";
// interfaces
import { Project } from "../../mobx/interfaces/project";

interface Props {
  projectIdx: number;
}
/**
 * A single tab button which navigates user to a given project on click.
 */
const NavProject: FC<Props> = ({ projectIdx }) => {
  // state
  const project: Project = useMainStore((s) => s.projects[projectIdx]);
  const setActiveProjectIdx = useMainStore((s) => s.setActiveProject);
  // event handler
  const onClickNavToCard = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      setActiveProjectIdx(projectIdx, "");
      project.ref!.current!.scrollIntoView();
    },
    [project.ref]
  );

  return <Tab onClick={onClickNavToCard} label={project.title} />;
};

export default observer(NavProject);

// react
import React, { FC, useCallback } from "react";
// style
import MuiLink from "@mui/material/Link";
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
 * main
 */
const NavProject: FC<Props> = ({ projectIdx }) => {
  // state
  // const activeProjectId: number = useAppContext((s) => s.main.activeProjectId);
  const project: Project = useAppContext((s) => s.main.projects[projectIdx]);
  const setActiveProjectIdx: MainStore["setActiveProjectId"] = useAppContext(
    (s) => s.main.setActiveProjectId
  );
  // event handler
  const onClickNavToCard = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      setActiveProjectIdx(projectIdx);
      project.ref!.current!.scrollIntoView();
    },
    [project.ref]
  );

  // adjust styling
  // const isActive = activeProjectId === projectIdx;

  // return <LinkTab projectIdx={projectIdx} />;
  return (
    <Tab
      onClick={onClickNavToCard}
      component={MuiLink}
      sx={{ color: "pink" }}
    />
  );
};

export default observer(NavProject);

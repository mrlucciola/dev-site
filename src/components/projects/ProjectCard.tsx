// react
import { FC } from "react";
// style
// state
import { observer } from "mobx-react-lite";
import { MainStore } from "../../mobx/stores/main";
import { Project } from "../../mobx/types";
import { useAppContext } from "../../mobx/context";
// components
import ProjectNav from "./projectNav/ProjectNav";
import ProjectPreview from "./projectPreview/ProjectPreview";
import ProjectDescription from "./projectDescription/ProjectDescription";
import ProjectStack from "./projectStack/ProjectStack";
// utils
import { slugify } from "../../util/slugify";
import "./Project.css";
import { Grid } from "@mui/material";

// event handlers
type OEAProps = (_: {
  projectIdx: number;
  isActive: boolean;
  setter: MainStore["setActiveProjectId"];
}) => () => void;
// const onEventActivateProject: OEAProps =
// ({ projectIdx, isActive, setter }) =>
// () => {
//   if (!isActive) {
//     // window.history.replaceState(
//     //   null,
//     //   null,
//     //   `${window.location.origin}#${slugify(title)}`
//     // );
//     setter(projectIdx);
//     // TODO: add react router
//   }
// };
type OEAProps_ = () => void;

interface Props {
  projectIdx: number;
}
/**
 * main
 */
const ProjectCard: FC<Props> = ({ projectIdx }) => {
  // state
  const title: string = useAppContext((s) => s.main.projects[projectIdx]).title;
  const setActiveProjectIdx: MainStore["setActiveProjectId"] = useAppContext(
    (s) => s.main.setActiveProjectId
  );
  const activeProjectIdx: number = useAppContext((s) => s.main.activeProjectId);
  // logic
  const isActive = projectIdx === activeProjectIdx;

  const onEventActivateProject: OEAProps_ = () => {
    if (!isActive) {
      setActiveProjectIdx(projectIdx);
    }
  };

  return (
    <Grid
      item
      container
      id={slugify(title)}
      onScroll={onEventActivateProject}
      onMouseOver={onEventActivateProject}
      // className={`ProjectCard ${isActive ? "active" : ""} w100`}
    >
      <ProjectNav projectIdx={projectIdx} />
      <ProjectPreview projectIdx={projectIdx} />
      <Grid
        item
        container
        // className="bottom"
      >
        <ProjectDescription projectIdx={projectIdx} />
        <ProjectStack projectIdx={projectIdx} />
      </Grid>
    </Grid>
  );
};

export default observer(ProjectCard);

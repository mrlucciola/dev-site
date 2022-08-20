// react
import { FC, RefObject, useEffect, useRef } from "react";
// style
import { Grid, GridProps } from "@mui/material";
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
// import "./Project.css";

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

interface Props extends GridProps {
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
  const setProjectRef: MainStore["setProjectRef"] = useAppContext(
    (s) => s.main.setProjectRef
  );
  const activeProjectIdx: number = useAppContext((s) => s.main.activeProjectId);
  // ref
  const refPc: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  // logic
  const isActive = projectIdx === activeProjectIdx;

  const onEventActivateProject: OEAProps_ = () => {
    if (!isActive) {
      setActiveProjectIdx(projectIdx);
    }
  };
  // effects
  useEffect(() => {
    refPc.current && setProjectRef(projectIdx, refPc);
  }, [refPc]);

  return (
    <Grid
      item
      container
      id={slugify(title)}
      onScroll={onEventActivateProject}
      onMouseOver={onEventActivateProject}
      // className={`ProjectCard ${isActive ? "active" : ""} w100`}
      ref={refPc}
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

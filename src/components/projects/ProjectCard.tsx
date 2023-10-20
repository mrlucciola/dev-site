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

// event handlers
type OEAProps = (_: {
  projectIdx: number;
  isActive: boolean;
  setter: MainStore["setActiveProjectId"];
}) => () => void;
const onEventActivateProject: OEAProps =
  ({ projectIdx, isActive, setter }) =>
  () => {
    if (!isActive) {
      // window.history.replaceState(
      //   null,
      //   null,
      //   `${window.location.origin}#${slugify(title)}`
      // );
      setter(projectIdx);
      // TODO: add react router
    }
  };

interface Props {
  projectIdx: number;
}
/**
 * main
 */
const ProjectCard: FC<Props> = ({ projectIdx }) => {
  // TODO: replace wherever projectObjArr is

  // state
  const { title, site, repo, stack, img, description }: Project = useAppContext(
    (s) => s.main.projects[projectIdx]
  );
  const setActiveProjectIdx: MainStore["setActiveProjectId"] = useAppContext(
    (s) => s.main.setActiveProjectId
  );
  const activeProjectIdx: number = useAppContext((s) => s.main.activeProjectId);
  // logic
  const isActive = projectIdx === activeProjectIdx;

  // TODO: add mui
  return (
    <div
      id={slugify(title)}
      className={`ProjectCard ${isActive ? "active" : ""} w100`}
      onScroll={onEventActivateProject({
        projectIdx,
        isActive,
        setter: setActiveProjectIdx,
      })}
      onMouseOver={onEventActivateProject({
        projectIdx,
        isActive,
        setter: setActiveProjectIdx,
      })}
    >
      <ProjectNav projectIdx={projectIdx} />
      <ProjectPreview projectIdx={projectIdx} />
      <div className="bottom">
        <ProjectDescription projectIdx={projectIdx} />
        <ProjectStack projectIdx={projectIdx} />
      </div>
    </div>
  );
};

export default observer(ProjectCard);

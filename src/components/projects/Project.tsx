// react
// redux
import { updateCurrentProject } from "../../redux/actions/projectActions";
// utils
import { slugify } from "../../util/slugify";
// components
import ProjectNav from "./projectNav/ProjectNav";
import ProjectPreview from "./projectPreview/ProjectPreview";
import ProjectDescription from "./projectDescription/ProjectDescription";
import ProjectStack from "./projectStack/ProjectStack";
// style
import "./Project.css";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/reducers/baseReducer";
// event handlers
const onEventActivateProject = ({ projectObj, isActive, dispatch }) => {
  if (!isActive) {
    dispatch(updateCurrentProject(projectObj));
    window.history.replaceState(
      null,
      null,
      `${window.location.origin}#${slugify(projectObj["title"])}`
    );
  }
};

/**
 * main
 */
const Project = ({ projectObj }) => {
  // init hooks
  let dispatch = useAppDispatch();
  // destructure
  const { title, siteURL, description, stackObj, imgURL, repoURL } = projectObj;
  // state
  const currentProjectTitle = useAppSelector(
    (state) => state.project.currentProject.title
  );

  const isActive = title === currentProjectTitle;

  return (
    <div
      id={slugify(title)}
      className={`Project ${isActive ? "active" : ""} w100`}
      onScroll={() => {
        onEventActivateProject({ projectObj, dispatch, isActive });
      }}
      onMouseOver={() => {
        onEventActivateProject({ projectObj, dispatch, isActive });
      }}
    >
      <ProjectNav title={title} repoURL={repoURL} siteURL={siteURL} />
      <ProjectPreview imgURL={imgURL} siteURL={siteURL} />
      <div className="bottom">
        <ProjectDescription description={description} />
        <ProjectStack stackObj={stackObj} />
      </div>
    </div>
  );
};

export default Project;

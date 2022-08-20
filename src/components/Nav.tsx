// react
import { FC } from "react";
// redux
import { updateCurrentProject } from "../redux/actions/projectActions";
// utils
import { slugify } from "../util/slugify";
// style
import "./Nav.css";
// constants
import { projectObjectsArr } from "../projectObjectsArr";
import { useAppDispatch, useAppSelector } from "../redux/reducers/baseReducer";

interface Props {
  currentProject: {
    title: string;
  };
  idx: number;
  projectObj: {
    title: string;
  };
}
const NavProject: FC<Props> = ({ currentProject, idx, projectObj }) => {
  // init hooks
  let dispatch = useAppDispatch();

  const { title } = projectObj;

  return (
    <div
      className={`navProject ${currentProject.title === title ? "active" : ""}`}
      onClick={() => {
        const newLocationStr = `${window.location.origin}#${slugify(title)}`;
        window.location.assign(newLocationStr);
        // let newLocation = new Location().assign(newLocationStr);
        // window.location = newLocation;
        dispatch(updateCurrentProject(projectObj));
      }}
      key={`n-p-${idx}`}
    >
      {title}
    </div>
  );
};

/**
 * main
 */
const Nav = () => {
  // state
  let currentProject = useAppSelector((state) => state.project.currentProject);
  // build fxns
  const buildProjectElemList = (_projectObjectsArr: any) => {
    return _projectObjectsArr.map((projectObj: any, idx: number) => {
      return (
        <NavProject
          currentProject={currentProject}
          projectObj={projectObj}
          idx={idx}
        />
      );
    });
  };

  return (
    <div className="Nav">
      <div
        className="home"
        onClick={() => {
          window.scroll(0, 0);
          // window.location = `${window.location.origin}#`;
          const newLocationStr = `${window.location.origin}#`;
          window.location.assign(newLocationStr);
        }}
      >
        Home
      </div>
      <div className="projectElemList">
        {buildProjectElemList(projectObjectsArr)}
      </div>
    </div>
  );
};

export default Nav;

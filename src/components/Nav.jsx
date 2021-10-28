// react
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// redux
import { updateCurrentProject } from "../redux/actions/projectActions";
// utils
import { slugify } from "../util/slugify";
// style
import "./Nav.css";
// constants
import { projectObjectsArr } from "../projectObjectsArr";

const NavProject = ({ currentProject, idx, projectObj }) => {
  // init hooks
  let dispatch = useDispatch();

  const { title } = projectObj;

  return (
    <div
      className={`navProject ${currentProject.title === title ? "active" : ""}`}
      onClick={() => {
        let newLocation = `${window.location.origin}#${slugify(title)}`;
        window.location = newLocation;
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
  let currentProject = useSelector(state => state.project.currentProject);
  // build fxns
  const buildProjectElemList = (
    _projectObjectsArr,
  ) => {
    return _projectObjectsArr.map((projectObj, idx) => {
      return <NavProject currentProject={currentProject} projectObj={projectObj} idx={idx} />;
    });
  };

  return (
    <div className="Nav">
      <div
        className="home"
        onClick={() => {
          window.scroll(0, 0);
          window.location = `${window.location.origin}#`;
        }}
      >
        Home
      </div>
      <div className="projectElemList">
        {buildProjectElemList(
          projectObjectsArr,
        )}
      </div>
    </div>
  );
};

export default Nav;

// react
import React from "react";
import { useSelector } from "react-redux";
// components
import Project from "./Project";
// constants

/**
 * main
 */
const ProjectList = () => {
  // state
  const projectObjArr = useSelector(s => s.project.projectObjArr);
  console.log(projectObjArr)
  // build
  const buildProjectElems = () => {
    return projectObjArr.map((projectObj, idx) => {
      return <Project projectObj={projectObj} key={`p-o-${idx}`} />;
    });
  };

  return projectObjArr.length > 0 ? (
    <div className="ProjectList">{buildProjectElems()}</div>
  ) : (<div />);
}

export default ProjectList;
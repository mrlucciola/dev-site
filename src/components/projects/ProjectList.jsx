// react
import React from "react";
// components
import Project from "./Project";
import { projectObjectsArr } from "../projectObjectsArr";

/**
 * main
 */
const ProjectList = () => {
  const buildProjectElems = (projectObjectsArr) => {
    return projectObjectsArr.map((projectObj, idx) => {
      return <Project projectObj={projectObj} key={`p-o-${idx}`} />;
    });
  };
  return (
    <div className="ProjectList">{buildProjectElems(projectObjectsArr)}</div>
  );
}

export default ProjectList;
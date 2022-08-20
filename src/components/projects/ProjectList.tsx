// react
import { FC } from "react";
// style
// state
import { useAppSelector } from "../../redux/reducers/baseReducer";
// components
import Project from "./Project";

/**
 * main
 */
const ProjectList: FC = () => {
  // state
  const projectObjArr = useAppSelector((s) => s.project.projectObjArr);
  console.log(projectObjArr);
  // build
  const buildProjectElems = () => {
    return projectObjArr.map((projectObj: any, idx: number) => {
      return <Project projectObj={projectObj} key={`p-o-${idx}`} />;
    });
  };

  return projectObjArr.length > 0 ? (
    <div className="ProjectList">{buildProjectElems()}</div>
  ) : (
    <div />
  );
};

export default ProjectList;

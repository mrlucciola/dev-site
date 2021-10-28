// react
import React from "react";
// components
import ProjectList from "../projects/ProjectList";
// import Progress from './progress/Progress';
// import Intro from './Intro';
// style
import "./Body.css";

// main
const Body = () => {
  return (
    <div className="Body">
      {/* <Progress /> */}
      {/* <Intro /> */}
      <ProjectList />
    </div>
  );
};
export default Body;

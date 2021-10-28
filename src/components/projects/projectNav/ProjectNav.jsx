// App > Main > Body > Project > ProjectNav
// react
import React from "react";
// style
import "./ProjectNav.css";

// main
const ProjectNav = ({ title, repoURL, siteURL }) => {

  return (
    <div className="ProjectNav">
      <div className="title">{title}</div>
      <div className="urls">
        {repoURL && (
          <a className="repoURL" href={repoURL}>
            GitHub
          </a>
        )}
        {siteURL && (
          <a className="siteURL" href={siteURL}>
            Website
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectNav;
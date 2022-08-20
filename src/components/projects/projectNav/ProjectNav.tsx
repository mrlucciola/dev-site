// react
import { FC } from "react";
// style
import "./ProjectNav.css";

interface Props {
  title: any;
  repoURL: any;
  siteURL: any;
}
// main
const ProjectNav: FC<Props> = ({ title, repoURL, siteURL }) => {
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
};

export default ProjectNav;

// react
import { FC } from "react";
import { Link } from "react-router-dom";
// style
// state
import { useAppContext } from "../../../mobx/context";
// utils
import "./ProjectNav.css";

interface Props {
  projectIdx: number;
}
// main
const ProjectNav: FC<Props> = ({ projectIdx }) => {
  const { title, repo, site } = useAppContext(
    (s) => s.main.projects[projectIdx]
  );
  // TODO: add mui

  return (
    <div className="ProjectNav">
      <div className="title">{title}</div>
      <div className="urls">
        {repo && (
          <Link className="Repo" to={repo}>
            GitHub
          </Link>
        )}
        {site && (
          <Link className="Site" to={site}>
            Website
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectNav;

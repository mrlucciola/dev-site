// react
import { FC } from "react";
import { Link } from "react-router-dom";
// state
import { observer } from "mobx-react-lite";
import { useAppContext } from "../mobx/context";
// style
// utils
import { slugify } from "../util/slugify";
// types
import { Project } from "../mobx/types";
import "./Nav.css";

interface Props {
  projectIdx: number;
}
const NavProject: FC<Props> = ({ projectIdx }) => {
  // state
  const activeProjectId: number = useAppContext((s) => s.main.activeProjectId);
  const projectTitle: string = useAppContext(
    (s) => s.main.projects[projectIdx].title
  );
  // adjust styling
  const isActive = activeProjectId === projectIdx;

  return (
    <Link
      to={`/${slugify(projectTitle)}`}
      className={`navProject ${isActive ? "active" : ""}`}
      // key={`n-p-${projectIdx}`}
    >
      {projectTitle}
    </Link>
  );
};

/**
 * main
 */
const Nav: FC = () => {
  // state
  const projects: Project[] = useAppContext((s) => s.main.projects);
  // create the element array
  const projectElems = projects.map((_, idx) => {
    return <NavProject projectIdx={idx} key={idx} />;
  });

  return (
    <div className="Nav">
      <Link
        // TODO: Add MuiLink style
        className="home"
        // TODO: incorporate <HashRouter>
        to={`/#`}
        // onClick={() => {
        // window.scroll(0, 0);
        // window.location = `${window.location.origin}#`;
        // const newLocationStr = `${window.location.origin}#`;
        // window.location.assign(newLocationStr);
        // }}
        key="nav"
      >
        Home
      </Link>
      <div className="projectElemList">{projectElems}</div>
    </div>
  );
};

export default observer(Nav);

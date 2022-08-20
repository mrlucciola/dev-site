// react
import { FC } from "react";
import { Link } from "react-router-dom";
// style
import MuiLink from "@mui/material/Link";
// state
import { observer } from "mobx-react-lite";
import { useAppContext } from "../../mobx/context";
// types
import { Project } from "../../mobx/types";
// utils
import { slugify } from "../../util/slugify";
import { Grid } from "@mui/material";

interface Props {
  projectIdx: number;
}
/**
 * main
 */
const NavProject: FC<Props> = ({ projectIdx }) => {
  // state
  const activeProjectId: number = useAppContext((s) => s.main.activeProjectId);
  const project: Project = useAppContext((s) => s.main.projects[projectIdx]);
  const projectTitle = project.title;
  // adjust styling
  const isActive = activeProjectId === projectIdx;

  return (
    <Grid item>
      <MuiLink
        to={`/${slugify(projectTitle)}`}
        component={Link}
        // className={`navProject ${isActive ? "active" : ""}`}
      >
        {projectTitle}
      </MuiLink>
    </Grid>
  );
};

export default observer(NavProject);

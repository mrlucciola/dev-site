// react
import { FC } from "react";
import { Link } from "react-router-dom";
// style
import MuiLink from "@mui/material/Link";
import { Grid, Typography } from "@mui/material";
// state
import { useAppContext } from "../../../mobx/context";
// utils
import "./ProjectNav.css";

interface Props {
  projectIdx: number;
}
// main
const ProjectNav: FC<Props> = ({ projectIdx }) => {
  const project = useAppContext((s) => s.main.projects[projectIdx]);
  const { title, repo, site } = project;

  return (
    <Grid
      item
      container
      // className="ProjectNav"
    >
      <Grid
        item
        component={Typography}
        // className="title"
      >
        {title}
      </Grid>
      <Grid
        item
        container
        // className="urls"
      >
        {repo && (
          <MuiLink
            to={repo}
            component={Link}
            // className="Repo"
          >
            <Typography>GitHub</Typography>
          </MuiLink>
        )}
        {site && (
          <MuiLink
            to={site}
            component={Link}
            // className="Site"
          >
            <Typography>Website</Typography>
          </MuiLink>
        )}
      </Grid>
    </Grid>
  );
};

export default ProjectNav;

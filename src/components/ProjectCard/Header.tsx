import { FC, RefObject, useRef } from "react";
// mui
import Grid from "@mui/material/Unstable_Grid2";
import CardHeader from "@mui/material/CardHeader";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
// state
import { observer } from "mobx-react-lite";
// interfaces
import { projectsLookup, type ProjectKey } from "../../projectConfigs";

const Header: FC<{ projectKey: ProjectKey }> = ({ projectKey }) => {
  /** @deprecated might not be necessary */
  const projectConfigRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  // state
  const { title, site, repo } = projectsLookup[projectKey];

  return (
    <ListSubheader
      title={title}
      sx={{ width: `100%` }}
      component={CardHeader}
      ref={projectConfigRef}
      action={
        <Grid container direction="row" spacing={2} sx={{ alignSelf: "center" }}>
          {/* @todo verify conditional spacing does not affect layout */}
          {/* @todo abstract out this kind of link (TextLink) */}
          <Grid sx={{ alignSelf: "center" }}>
            {site && (
              <MuiLink href={site as string} component="a">
                <Typography>Website</Typography>
              </MuiLink>
            )}
          </Grid>
          {/* @todo verify conditional spacing does not affect layout */}
          {/* @todo abstract out this kind of link (IconButtonLink) */}
          <Grid alignSelf={"center"}>
            {repo && (
              <IconButton LinkComponent={MuiLink} href={repo as string}>
                <GitHubIcon />
              </IconButton>
              // <MuiLink
              //   href={repo as string}
              //   // component={IconButton}
              //   component={IconButton}
              // >
              //   <GitHubIcon />
              // </MuiLink>
            )}
          </Grid>
        </Grid>
      }
    >
      {title}
    </ListSubheader>
  );
};
export default observer(Header);

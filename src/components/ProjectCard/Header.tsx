import { FC, RefObject, useEffect, useRef } from "react";
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
import { useMainStore } from "../../mobx/stores";

const Header: FC<{ projectIdx: number }> = ({ projectIdx }) => {
  const setProjectRef = useMainStore((s) => s.setProjectRef);
  const project = useMainStore((s) => s.projects[projectIdx]);
  const { title, ref, site, repo } = project;
  // ref
  const refPc: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  // effects
  useEffect(() => {
    refPc.current && setProjectRef(projectIdx, refPc);
  }, [refPc]);

  return (
    <ListSubheader
      title={title}
      sx={{ width: `100%` }}
      component={CardHeader}
      ref={refPc}
      action={
        <Grid container direction="row" spacing={2} alignSelf={"center"}>
          <Grid alignSelf={"center"}>
            {site && (
              <MuiLink href={site as string} component="a">
                <Typography>Website</Typography>
              </MuiLink>
            )}
          </Grid>
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

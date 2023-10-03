import { FC, RefObject, useEffect, useRef } from "react";
// mui
import Grid from "@mui/material/Unstable_Grid2";
import GridProps from "@mui/material/Unstable_Grid2/Grid2Props";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Skeleton from "@mui/material/Skeleton";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
// state
import { observer } from "mobx-react-lite";
import { useMainStore } from "../mobx/stores";
// components
import ProjectStack from "./ProjectStack";
// utils
import { slugify } from "../util/slugify";

/** ### Project view
 * Display component showing information about a single project.
 * 
 * Consists of a header, image, description, and stack.\
 * Sets a ref in order to call "scrollTo..." within NavProjects.\
 * This ref is stored in MobX state.
 */
const ProjectCard: FC<
  GridProps.Grid2Props & {
    projectIdx: number;
    projectId?: string;
  }
> = ({ ...props }) => {
  const projectIdx = props.projectIdx;
  // state: observables
  const activeProjectIdx: number = useMainStore((s) => s.activeProjectIdx);
  const project = useMainStore((s) => s.projects[projectIdx]);
  const { title, repo, site, img } = project;
  // state: actions
  const setActiveProject = useMainStore((s) => s.setActiveProject);
  const setProjectRef = useMainStore((s) => s.setProjectRef);

  // ref
  const refPc: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  // logic
  const isActive = projectIdx === activeProjectIdx;

  // event handlers
  const onEventActivateProject = () => {
    if (!isActive) {
      setActiveProject(projectIdx, "");
    }
  };
  // effects
  useEffect(() => {
    refPc.current && setProjectRef(projectIdx, refPc);
  }, [refPc]);

  return (
    <ListItem
      id={slugify(title)}
      onScroll={onEventActivateProject}
      onMouseOver={onEventActivateProject}
      sx={{ mh: 5, minWidth: "100%", flex: 1 }}
      component={Stack}
      direction="column"
    >
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
      <ListItem disableGutters disablePadding divider>
        <Card sx={{ borderRadius: "0", flex: 1 }}>
          {img ? (
            <CardMedia
              component="img"
              image={`${img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={`img: ${project.title}`}
              loading="lazy"
            />
          ) : (
            <CardContent>
              <Skeleton
                sx={{ bgcolor: "grey.500" }}
                height={100}
                variant="rounded"
                animation="wave"
              />
            </CardContent>
          )}

          <CardContent>
            {project.description.split("\n\n").map((i, key) => {
              return (
                <Typography gutterBottom key={key}>
                  {i.trim()}
                </Typography>
              );
            })}
          </CardContent>

          <ProjectStack {...props} />
        </Card>
      </ListItem>
    </ListItem>
  );
};

export default observer(ProjectCard);

// react
import { FC, RefObject, useEffect, useRef } from "react";
// style
import Grid, { GridProps } from "@mui/material/Grid";
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
import { MainStore } from "../../mobx/stores/main";
import { Project } from "../../mobx/types";
import { useAppContext } from "../../mobx/context";
// components
import ProjectStack from "./ProjectStack";
// utils
import { slugify } from "../../util/slugify";

interface Props extends GridProps {
  projectIdx: number;
}
/**
 * Display component for a single project.
 * Consists of a header, image, description, and stack
 * 
 * Sets a ref in order to call "scrollTo..." within NavProjects.
 * This ref is stored in MobX state.
 */
const ProjectCard: FC<Props> = ({ ...props }) => {
  const projectIdx = props.projectIdx;
  // state
  const project: Project = useAppContext((s) => s.main.projects[projectIdx]);
  const { title, repo, site, img } = project;
  const setActiveProjectIdx: MainStore["setActiveProjectId"] = useAppContext(
    (s) => s.main.setActiveProjectId
  );
  const setProjectRef: MainStore["setProjectRef"] = useAppContext(
    (s) => s.main.setProjectRef
  );
  const activeProjectIdx: number = useAppContext((s) => s.main.activeProjectId);
  // ref
  const refPc: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  // logic
  const isActive = projectIdx === activeProjectIdx;

  // event handlers
  const onEventActivateProject = () => {
    if (!isActive) {
      setActiveProjectIdx(projectIdx);
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
            <Grid item alignSelf={"center"}>
              {site && (
                <MuiLink href={site as string} component="a">
                  <Typography>Website</Typography>
                </MuiLink>
              )}
            </Grid>
            <Grid item alignSelf={"center"}>
              {repo && (
                <MuiLink
                  href={repo as string}
                  component={IconButton}
                  aria-label="settings"
                >
                  <GitHubIcon />
                </MuiLink>
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

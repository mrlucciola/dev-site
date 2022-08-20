// react
import { FC } from "react";
// import { Link } from "react-router-dom";
// style
import { Avatar, Grid, GridProps, ImageListItem } from "@mui/material";
// state
import { observer } from "mobx-react-lite";
import { useAppContext } from "../../../mobx/context";
// types
import { Project } from "../../../mobx/types";
// style
// import "./ProjectPreview.css";

interface Props extends GridProps {
  projectIdx: number;
}
// main
const ProjectPreview: FC<Props> = ({ projectIdx }) => {
  // state
  const project: Project = useAppContext((s) => s.main.projects[projectIdx]);
  const { img, site } = project;
  // @ts-ignore
  const link = site ? { pathname: site } : "";

  return (
    <Grid

    // className="ProjectPreview"
    // className="imgContainer"
    >
      {/* // @ts-ignore */}
      <ImageListItem
        // component={() => {
        //   return site ? <Link to={site as string} /> : <></>;
        // }}
        // component={Link}
        // to={{ pathname: site as string }}
        // target="_blank"
        // window.location.replace('https://www.google.com')
      >
        <img
          src={`${img}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={project.title}
          loading="lazy"
        />
      </ImageListItem>
      {/* add image avatar here */}
      <Avatar />
    </Grid>
  );
};

export default observer(ProjectPreview);

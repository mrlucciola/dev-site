import { FC } from "react";
// mui
import CardMedia from "@mui/material/CardMedia";
// interfaces
import { type ProjectKey, projectsLookup } from "../../projectConfigs";

const CardImg: FC<{ projectKey: ProjectKey }> = ({ projectKey }) => (
  <CardMedia
    component="img"
    image={`${projectsLookup[projectKey].img}?w=164&h=164&fit=crop&auto=format`}
    srcSet={`${projectsLookup[projectKey].img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
    alt={`img: ${projectsLookup[projectKey].title}`}
    loading="lazy"
  />
);

export default CardImg;

// react
import { FC } from "react";
// style
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// components
import ProjectList from "./projects";

/**
 * Displays all content for page
 */
const Body: FC = () => {
  return (
    <Grid container sx={{ flex: 1, overflow: "scroll" }} component={Container}>
      <ProjectList />
    </Grid>
  );
};
export default Body;

// react
import { FC } from "react";
// style
import { Grid } from "@mui/material";
// components
import ProjectList from "../projects/ProjectList";
import "./Body.css";

// main
const Body: FC = () => {
  // TODO: add mui grid elements
  return (
    <Grid container className="Body">
      <ProjectList />
    </Grid>
  );
};
export default Body;

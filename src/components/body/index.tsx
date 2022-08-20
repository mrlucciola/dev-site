// react
import { FC } from "react";
// style
import { Grid } from "@mui/material";
import ProjectList from "../projects/ProjectList";
// components
// style
import "./Body.css";

// main
const Body: FC = () => {
  return (
    <Grid container className="Body">
      <ProjectList />
    </Grid>
  );
};
export default Body;

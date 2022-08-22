// react
import { FC } from "react";
// style
import { Grid } from "@mui/material";
// components
import ProjectList from "../projects/ProjectList";
// import "./Body.css";

// main
const Body: FC = () => {
  return (
    <Grid
      container
      sx={{ flex: 1, overflow: "scroll" }}
      // className="Body"
    >
      <ProjectList />
    </Grid>
  );
};
export default Body;

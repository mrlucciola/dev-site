// react
import { FC } from "react";
// style
import { Container, Grid } from "@mui/material";
// components
import ProjectList from "../projects";
// import "./Body.css";

// main
const Body: FC = () => {
  return (
    <Grid
      container
      sx={{ flex: 1, overflow: "scroll" }}
      // className="Body"
      component={Container}
    >
      <ProjectList />
    </Grid>
  );
};
export default Body;

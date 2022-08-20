// react
import { Grid, Typography } from "@mui/material";
import { FC } from "react";

// main
const Intro: FC = () => {
  return (
    <Grid item container className="Intro" id="Intro">
      <Grid item container className="introNav">
        <Grid item className="title" component={Typography}>
          Rocco Lucciola
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Intro;

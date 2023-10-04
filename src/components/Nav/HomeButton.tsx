import { FC } from "react";
// mui
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

const HomeButton: FC = () => {
  return (
    <Grid container flexDirection="column" fontSize={25} p={1}>
      <Grid container flexDirection="row" spacing={0.2}>
        <Grid
          component={Typography}
          fontWeight={800}
          color="rgb(200,200,200)"
          fontSize="inherit"
        >
          M.
        </Grid>
        <Grid
          component={Typography}
          fontWeight={800}
          color="rgb(200,200,200)"
          fontSize="inherit"
        >
          R.
        </Grid>
      </Grid>
      <Grid component={Typography} fontWeight={800} color="white" fontSize="inherit">
        Lucciola
      </Grid>
    </Grid>
  );
};
export default HomeButton;

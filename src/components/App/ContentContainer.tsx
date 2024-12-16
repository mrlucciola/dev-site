import { FC } from "react";
// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Grid2Props } from "@mui/material";

/** ###  */
const ContentContainer: FC<Grid2Props> = ({ children, sx, ...gridProps }) => (
  <Grid
    container
    direction="column"
    sx={{ flex: 1, justifyContent: "space-between", alignItems: "center", maxWidth: 1300, ...sx }}
    {...gridProps}
  >
    {children}
  </Grid>
);

export default ContentContainer;

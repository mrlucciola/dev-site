import { FC } from "react";
// mui
import Grid, { Grid2Props } from "@mui/material/Grid2";

/** @todo add media query for maxwidth */
const AppSectionLayout: FC<Grid2Props> = ({ children, sx, ...gridProps }) => (
  <Grid
    container
    direction="column"
    sx={{ flex: 1, justifyContent: "center", alignItems: "center", maxWidth: 1300, ...sx }}
    {...gridProps}
  >
    {children}
  </Grid>
);

/** ###  */
const AppSectionContainer: FC<Grid2Props & { containerProps?: Grid2Props }> = ({
  containerProps,
  children,
  ...layoutProps
}) => (
  <Grid
    container
    direction="column"
    wrap="nowrap"
    {...containerProps}
    sx={{
      minWidth: "100%",
      maxWidth: "100%",
      width: "100%",
      justifyContent: "start",
      alignItems: "center",
      overflowX: "hidden",
      ...containerProps?.sx,
    }}
  >
    <AppSectionLayout {...layoutProps}>{children}</AppSectionLayout>
  </Grid>
);

export default AppSectionContainer;

import { FC } from "react";
// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Grid2Props } from "@mui/material";
import ContentContainer from "./ContentContainer";

/** @deprecated unused */
export const ViewSectionContainerNew: FC<Grid2Props & { parentContainerProps: Grid2Props }> = ({
  parentContainerProps,
  direction = "column",
  children,
  sx,
  ...gridProps
}) => (
  <Grid
    container
    wrap="nowrap"
    sx={{
      minWidth: "100%",
      maxWidth: "100%",
      width: "100%",
      alignItems: "center",
      overflowX: "hidden",
      ...parentContainerProps.sx,
    }}
    {...parentContainerProps}
  >
    <ContentContainer
      direction={direction}
      sx={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}
      {...gridProps}
    >
      {children}
    </ContentContainer>
  </Grid>
);

/** ###  */
const ViewSectionContainer: FC<Grid2Props> = ({ sx, ...gridProps }) => (
  <Grid
    container
    wrap="nowrap"
    direction="column"
    sx={{
      minWidth: "100%",
      maxWidth: "100%",
      width: "100%",
      alignItems: "center",
      overflowX: "hidden",
      ...sx,
    }}
    {...gridProps}
  />
);

export default ViewSectionContainer;

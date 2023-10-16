import { FC } from "react";
// mui
import Grid from "@mui/material/Unstable_Grid2";
// components
import NavProjectMenu from "./NavProjectMenu";
import HomeButton from "./HomeButton";

/** ### Navbar display component
 */
const Nav: FC = () => {
  return (
    <Grid
      container
      direction="row"
      sx={{ background: `rgb(27, 27, 27)` }}
      justifyContent="space-between"
      alignItems="center"
      flexWrap="nowrap"
    >
      <Grid
        container
        alignSelf="center"
        flexDirection="row"
        justifyContent="center"
        md={2}
        px={2}
      >
        <HomeButton />
      </Grid>
      <NavProjectMenu />
    </Grid>
  );
};

export default Nav;

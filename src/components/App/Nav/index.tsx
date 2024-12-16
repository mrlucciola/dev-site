import { FC } from "react";
// mui
import Grid from "@mui/material/Unstable_Grid2";
// components
import NavProjectMenu from "./NavProjectMenu";
import HomeButton from "./HomeButton";
import ContentContainer from "../ContentContainer";
import ViewSectionContainer from "../ViewSectionContainer";

/** ### Navbar display component */
const Nav: FC = () => (
  <ViewSectionContainer
    direction="row"
    sx={{ justifyContent: "center", overflowX: "hidden", background: `rgb(27,27,27)` }}
    id="nav"
  >
    <ContentContainer direction="row">
      <Grid container sx={{ justifyContent: "center", alignSelf: "center" }}>
        <HomeButton />
      </Grid>

      <NavProjectMenu />
    </ContentContainer>
  </ViewSectionContainer>
);

export default Nav;

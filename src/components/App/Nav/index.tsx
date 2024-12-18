import { FC } from "react";
// components
import AppSectionContainer from "../AppSectionContainer";
import NavProjectMenu from "./NavProjectMenu";
import HomeButton from "./HomeButton";

/** ### Navbar display component */
const Nav: FC = () => (
  <AppSectionContainer
    direction="row"
    wrap="nowrap"
    sx={{ overflowX: "hidden", flex: 1, justifyContent: "space-between" }}
    containerProps={{
      id: "nav",
      direction: "row",
      sx: { justifyContent: "center", background: `rgb(27,27,27)` },
    }}
  >
    <HomeButton />
    <NavProjectMenu />
  </AppSectionContainer>
);

export default Nav;

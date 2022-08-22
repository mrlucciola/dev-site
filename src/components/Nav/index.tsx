// react
import { FC } from "react";
import { Link } from "react-router-dom";
// style
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
// state
import { observer } from "mobx-react-lite";
// components
import NavProjects from "./NavProjects";
// utils
// import "./Nav.css";

// event handlers
// const onClickHomeHandler = () => {
// window.scroll(0, 0);
// window.location = `${window.location.origin}#`;
// const newLocationStr = `${window.location.origin}#`;
// window.location.assign(newLocationStr);
// }

/**
 * main
 */
const Nav: FC = () => {
  return (
    <Grid
      item
      container
      direction="row"
      sx={{ background: `rgb(27, 27, 27)` }}
      // className="Nav"
    >
      <Grid item xs={2}>
        {/* <MuiLink
          to={`/#`}
          key="nav"
          component={Link}
          // className="home"
        > */}
        Home
        {/* </MuiLink> */}
      </Grid>
      <NavProjects />
    </Grid>
  );
};

export default observer(Nav);

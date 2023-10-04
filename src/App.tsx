import { FC } from "react";
// mui
import { Grid } from "@mui/material";
// state
import { observer } from "mobx-react-lite";
// components
import Body from "./components/Body";
import Nav from "./components/Nav";

/** ### App entrypoint
 */
const App: FC = () => {
  return (
    <Grid
      container
      direction="column"
      className="App"
      sx={{
        height: "100vh",
        minHeight: "100vh",
        maxHeight: "100vh",
        width: "100vw",
        maxWidth: "100vw",
        minWidth: "100vw",
      }}
      wrap="nowrap"
    >
      <Nav />
      <Body />
    </Grid>
  );
};

export default observer(App);

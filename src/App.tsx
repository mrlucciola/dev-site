// react
// style
import { Grid } from "@mui/material";
// state
import { observer } from "mobx-react-lite";
// components
import Body from "./components/Body";
import Nav from "./components/Nav";

/**
 * Sets the state on first render with seed data and displays the entire page view
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
    >
      <Nav />
      <Body />
    </Grid>
  );
};

export default observer(App);

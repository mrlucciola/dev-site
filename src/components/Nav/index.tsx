// react
import { FC } from "react";
// style
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
// state
import { observer } from "mobx-react-lite";
import { useAppContext } from "../../mobx/context";
// components
import NavProject from "./NavProject";
import { Typography } from "@mui/material";

/**
 * main
 */
const Nav: FC = () => {
  // state
  const activeProjectId: number = useAppContext((s) => s.main.activeProjectId);
  const projectLen: number = useAppContext((s) => s.main.projects).length;
  // create the element array
  const projectElems = Array.from(Array(projectLen).keys()).map((idx) => {
    return <NavProject projectIdx={idx} key={`nproj-${idx}`} />;
  });

  return (
    <Grid
      item
      container
      direction="row"
      sx={{ background: `rgb(27, 27, 27)` }}
      justifyContent="space-between"
      alignItems="center"
      flexWrap={"nowrap"}
    >
      <Grid
        item
        container
        alignSelf="center"
        flexDirection={"row"}
        justifyContent={"center"}
        md={2}
        // sm={3}
        px={2}
      >
        <Typography color="aliceblue" textAlign="center" noWrap>
          Rocco Lucciola's
        </Typography>
        <Typography color="aliceblue" textAlign="center" pl={1}>
          Portfolio
        </Typography>
      </Grid>
      <Grid item md={true} sm={9} xs={8}>
        <Tabs
          value={activeProjectId}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          textColor="primary"
          sx={{ color: "aliceblue", flex: 1 }}
        >
          {projectElems}
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default observer(Nav);

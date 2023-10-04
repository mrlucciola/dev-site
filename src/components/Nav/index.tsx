import { FC } from "react";
// mui
import Grid from "@mui/material/Unstable_Grid2";
import Tabs from "@mui/material/Tabs";
// state
import { observer } from "mobx-react-lite";
import { useMainStore } from "../../mobx/stores";
// components
import NavProject from "./NavProject";
import HomeButton from "./HomeButton";

/** ### Navbar display component
 */
const Nav: FC = () => {
  // state: observables
  const activeProjectIdx: number = useMainStore((s) => s.activeProjectIdx);
  const projectCt: number = useMainStore((s) => s.projects).length;

  // build
  const projectElems = Array.from(Array(projectCt).keys()).map((idx) => {
    return <NavProject projectIdx={idx} key={`nproj-${idx}`} />;
  });

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
        flexDirection={"row"}
        justifyContent={"center"}
        md={2}
        px={2}
      >
        <HomeButton />

        {/* <Typography color="aliceblue" textAlign="center" noWrap>
          Rocco Lucciola's
        </Typography> */}
        {/* <Typography color="aliceblue" textAlign="center" pl={1}>
          Portfolio
        </Typography> */}
      </Grid>
      <Grid md={true} sm={9} xs={8}>
        <Tabs
          value={activeProjectIdx}
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

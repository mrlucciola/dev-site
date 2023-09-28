// style
import Grid from "@mui/material/Unstable_Grid2";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
// state
import { observer } from "mobx-react-lite";
// components
import NavProject from "./NavProject";
import { useMainStore } from "../../mobx/stores";

/** Navigation bar display component
 */
const Nav: FC = () => {
  // state: observables
  const activeProjectIdx: number = useMainStore((s) => s.activeProjectIdx);
  const projectLen: number = useMainStore((s) => s.projects).length;

  // create the element array
  const projectElems = Array.from(Array(projectLen).keys()).map((idx) => {
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
        <Typography color="aliceblue" textAlign="center" noWrap>
          Rocco Lucciola's
        </Typography>
        <Typography color="aliceblue" textAlign="center" pl={1}>
          Portfolio
        </Typography>
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

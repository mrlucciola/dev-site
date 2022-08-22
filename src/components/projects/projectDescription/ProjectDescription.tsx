// react
import { FC } from "react";
// style
import { Grid, GridProps } from "@mui/material";
// state
import { observer } from "mobx-react-lite";
import { useAppContext } from "../../../mobx/context";
// import "./ProjectDescription.css";

interface Props extends GridProps {
  projectIdx: number;
}
// main
const ProjectDescription: FC<Props> = ({ projectIdx }) => {
  const description: string =
    useAppContext((s) => s.main.projects[projectIdx]).description || "";

  return (
    <Grid
    // className="ProjectDescription"
    >
      <Grid
      //className="text"
      >
        {description}
      </Grid>
    </Grid>
  );
};
export default observer(ProjectDescription);

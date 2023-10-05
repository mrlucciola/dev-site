import { FC } from "react";
// mui
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import ListItem from "@mui/material/ListItem";
// state
import { observer } from "mobx-react-lite";
import { useMainStore } from "../../mobx/stores";
// components
import ProjectStack from "../ProjectStack";
import ProjectDisplay from "./ProjectDisplay";

const Body: FC<{ projectIdx: number }> = ({ projectIdx }) => {
  // state
  const project = useMainStore((s) => s.projects[projectIdx]);
  // build
  const descriptionLines = project.description.split("\n\n").map((i, key) => {
    return (
      <Typography gutterBottom key={key}>
        {i.trim()}
      </Typography>
    );
  });

  return (
    <ListItem disableGutters disablePadding divider>
      <Card sx={{ borderRadius: "0", flex: 1 }}>
        <ProjectDisplay project={project} />

        <CardContent>{descriptionLines}</CardContent>

        <ProjectStack projectIdx={projectIdx} />
      </Card>
    </ListItem>
  );
};

export default observer(Body);

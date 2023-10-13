import { FC } from "react";
// markdown
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
// mui
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

  return (
    <ListItem disableGutters disablePadding divider>
      <Card sx={{ borderRadius: "0", flex: 1 }}>
        <ProjectDisplay project={project} />

        <CardContent>
          <Markdown remarkPlugins={[remarkGfm]}>{project.description}</Markdown>
        </CardContent>

        <ProjectStack projectIdx={projectIdx} />
      </Card>
    </ListItem>
  );
};

export default observer(Body);

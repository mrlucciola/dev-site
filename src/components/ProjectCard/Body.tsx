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
// components
import ProjectStack from "../ProjectStack";
import ProjectDisplay from "./ProjectDisplay";
// data
import { type ProjectKey, projectsLookup } from "../../projectConfigs";

/** ### Project card body layout */
const Body: FC<{ projectKey: ProjectKey }> = ({ projectKey }) => {
  const project = projectsLookup[projectKey];

  return (
    <ListItem disableGutters disablePadding divider>
      <Card sx={{ borderRadius: 0, flex: 1 }}>
        <ProjectDisplay projectKey={projectKey} />

        <CardContent>
          <Markdown remarkPlugins={[remarkGfm]}>{project.description}</Markdown>
        </CardContent>

        <ProjectStack projectKey={projectKey} />
      </Card>
    </ListItem>
  );
};

export default observer(Body);

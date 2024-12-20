import { type FC } from "react";
// mui
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import ListItem from "@mui/material/ListItem";
// state
// components
import ProjectStack from "../ProjectStack";
import ProjectDisplay from "./ProjectDisplay";
// data
import { type ProjectKey, projectsLookup } from "../../projectConfigs";
import MarkdownText from "../../util/MarkdownBlock";

/** ### Project card body layout */
const ProjectCardBody: FC<{ projectKey: ProjectKey }> = ({ projectKey }) => {
  const project = projectsLookup[projectKey];

  return (
    // @todo remove - listitem component within a listitem component
    <ListItem disableGutters disablePadding divider>
      <Card sx={{ borderRadius: 0, flex: 1 }}>
        <ProjectDisplay projectKey={projectKey} />

        <CardContent>
          <MarkdownText>{project.description}</MarkdownText>
        </CardContent>

        <ProjectStack projectKey={projectKey} />
      </Card>
    </ListItem>
  );
};

export default ProjectCardBody;

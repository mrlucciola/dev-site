import { FC, useEffect, useState } from "react";
import mermaid, { RenderResult } from "mermaid";
// mui
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
// components
import Diagram from "./Diagram";
import Img from "./Img";
// interfaces
import { Project } from "../../mobx/interfaces/project";

const ProjectDisplay: FC<{ project: Project }> = ({ project }) => {
  // for diagram
  // const [renderedDiagram, setRenderedDiagram] = useState<RenderResult>();
  // const cssTag = `${project.title}-diagram`;
  // const drawDiagram = async () => {
  //   const rendered = await mermaid.render(cssTag, project.diagram!);
  //   setRenderedDiagram(rendered);
  // };
  // useEffect(() => {
  //   if (project.diagram) {
  //     drawDiagram();
  //   }
  // }, []);

  if (project.img) {
    return <Img imgUrl={project.img} title={project.title} />;
  } else if (project.diagram) {
    return <Diagram diagramStr={project.diagram} />;
  }

  return (
    <CardContent>
      <Skeleton
        sx={{ bgcolor: "grey.500" }}
        height={100}
        variant="rounded"
        animation="wave"
      />
    </CardContent>
  );
};

export default ProjectDisplay;

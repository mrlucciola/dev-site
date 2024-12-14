import { FC } from "react";
// mui
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
// components
import Diagram from "./Diagram";
import CardImg from "./CardImg";
// data
import { projectsLookup, type ProjectKey } from "../../projectConfigs";

const ProjectDisplay: FC<{ projectKey: ProjectKey }> = ({ projectKey }) => {
  const project = projectsLookup[projectKey];

  // @todo implement `mermaid` diagram
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

  /**
    if (project.img || project.diagram) {
      return (
        // @todo Convert to `flex`+`column` if not already
        <CardContent>
          {project.img && <CardImg imgUrl={project.img} title={project.title} />}
          {project.diagram && <Diagram diagramStr={project.diagram} />}
        </CardContent>
      );
    }
   */
  // @todo remove this conditional and replace with above multiline-comment
  if (project.img) {
    return <CardImg projectKey={projectKey} />;
  } else if (project.diagram) {
    return <Diagram diagramStr={project.diagram} />;
  }

  return (
    <CardContent>
      <Skeleton sx={{ bgcolor: "grey.500" }} height={100} variant="rounded" animation="wave" />
    </CardContent>
  );
};

export default ProjectDisplay;

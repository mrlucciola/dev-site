import { FC } from "react";
// mui
import List from "@mui/material/List";
// components
import ViewSectionContainer from "./ViewSectionContainer";
import ContentContainer from "./ContentContainer";
import ProjectCard from "../ProjectCard";
import AboutCard from "./AboutCard";
// state
import { projectsForDisplay } from "../../projectConfigs";

/** ### Page body - list of elements */
const Body: FC = () => {
  // Build elems
  const projectElems = projectsForDisplay.map((projectKey) => (
    <ProjectCard projectKey={projectKey} key={projectKey} />
  ));

  return (
    <ViewSectionContainer id="body" sx={{ flex: 1, overflowY: "scroll", background: "red" }}>
      <ContentContainer component={List} direction="column">
        <AboutCard />
        {projectElems}
      </ContentContainer>
    </ViewSectionContainer>
  );
};

export default Body;

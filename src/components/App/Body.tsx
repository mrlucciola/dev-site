import { FC } from "react";
// mui
import List from "@mui/material/List";
// components
import AppSectionContainer from "./AppSectionContainer";
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
    <AppSectionContainer
      component={List}
      sx={{ background: "red" }}
      containerProps={{
        id: "body",
        sx: { flex: 1, overflowY: "scroll", background: "pink" },
      }}
    >
      <AboutCard />
      {projectElems}
    </AppSectionContainer>
  );
};

export default Body;

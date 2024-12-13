import { useState } from "react";
import useCtxFactory, { type ICtxState } from "../../util/useCtxFactory";
import { type Project } from "../../mobx/interfaces/project";
import { projectsArr } from "../../projectConfigs";

export const { useAppCtx, AppProvider } = useCtxFactory(() => {
  const [projects, setProjects] = useState<Project[]>(projectsArr);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  // Getters
  const activeProject: Project = projects[activeProjectIdx];

  return {
    projects,
    // @todo remove if unused
    setProjects,

    activeProjectIdx,
    setActiveProjectIdx,

    // Getters
    activeProject,
  };
}, "App");
export type IAppCtx = ICtxState<typeof useAppCtx>;

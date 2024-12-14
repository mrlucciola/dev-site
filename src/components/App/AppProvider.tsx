import { useState } from "react";
// utils
import useCtxFactory, { type ICtxState } from "../../util/useCtxFactory";
// interfaces
import { type Project } from "../../mobx/interfaces/project";
// data
import { ProjectKey, projectsLookup } from "../../projectConfigs";

export const { useAppCtx, AppProvider } = useCtxFactory(() => {
  const [activeProjectKey, setActiveProjectKey] = useState<ProjectKey>(ProjectKey.options[0]);

  // Getters
  const activeProject: Project = projectsLookup[activeProjectKey];

  return {
    activeProjectKey,
    setActiveProjectKey,

    // Getters
    activeProject,
  };
}, "App");
export type IAppCtx = ICtxState<typeof useAppCtx>;

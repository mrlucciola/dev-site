import { useState } from "react";
// utils
import useCtxFactory, { type ICtxState } from "../../util/useCtxFactory";
// interfaces
import { type Project } from "../../mobx/interfaces/project";
// data
import { ActiveProjectKey, projectsLookup } from "../../projectConfigs";

export const { useAppCtx, AppProvider } = useCtxFactory(() => {
  /** @deprecated remove - use `activeProjectKey`/`setActiveProjectKey` instead */
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeProjectKey, setActiveProjectKey] = useState<ActiveProjectKey>(
    ActiveProjectKey.options[0]
  );

  // Getters
  const activeProject: Project = projectsLookup[activeProjectKey];

  return {
    /** @deprecated remove - use `activeProjectKey` instead */
    activeProjectIdx,
    /** @deprecated remove - use `setActiveProjectKey` instead */
    setActiveProjectIdx,
    activeProjectKey,
    setActiveProjectKey,

    // Getters
    activeProject,
  };
}, "App");
export type IAppCtx = ICtxState<typeof useAppCtx>;

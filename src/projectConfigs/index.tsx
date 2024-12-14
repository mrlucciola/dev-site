import { z } from "zod";
// interfaces
import { type Project } from "../mobx/interfaces/project";
// projects
import aaveLiquidationEngineProjectConfig from "./AaveLiquidationEngineProject";
import bdaProjectConfig from "./BdaProject";
import portfolioProjectConfig from "./PortfolioProject";

// @todo add to this enum
export const HiddenProjectKey = z.enum(["bda"]);
export type HiddenProjectKey = z.infer<typeof HiddenProjectKey>;

export const ActiveProjectKey = z.enum(["aaveLiquidationEngine", "portfolio"]);
export type ActiveProjectKey = z.infer<typeof ActiveProjectKey>;

export const ProjectKey = z.enum([...ActiveProjectKey.options, ...HiddenProjectKey.options]);
export type ProjectKey = z.infer<typeof ProjectKey>;

export const projectsLookup: { [key in ProjectKey]: Project } = {
  aaveLiquidationEngine: aaveLiquidationEngineProjectConfig,
  bda: bdaProjectConfig,
  portfolio: portfolioProjectConfig,
};

// @todo add env-based conditional to use hidden elems if local dev
export const projectsForDisplay = ProjectKey.options; // isLocal ? ProjectKey.options : ActiveProjectKey.options

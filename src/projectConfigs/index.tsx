import { z } from "zod";
// interfaces
import { type Project } from "../mobx/interfaces/project";
// projects
import AaveLiquidationEngine from "./AaveLiquidationEngineProject";
import BDA from "./BdaProject";
import Portfolio from "./PortfolioProject";

// @todo add to this enum
export const HiddenProjectKey = z.enum(["bda"]);
export type HiddenProjectKey = z.infer<typeof HiddenProjectKey>;

export const ActiveProjectKey = z.enum(["aaveLiquidationEngine", "portfolio"]);
export type ActiveProjectKey = z.infer<typeof ActiveProjectKey>;

export const ProjectKey = z.enum([...ActiveProjectKey.options, ...HiddenProjectKey.options]);
export type ProjectKey = z.infer<typeof ProjectKey>;

export const projectsLookup: { [key in ProjectKey]: Project } = {
  aaveLiquidationEngine: AaveLiquidationEngine,
  bda: BDA,
  portfolio: Portfolio,
};

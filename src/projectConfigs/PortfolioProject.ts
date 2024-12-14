import { z } from "zod";
import { Project } from "../mobx/interfaces/project";

/** Markdown string */
const description = `
Display recent projects.
`;

/** @todo implement diagram string
 *
 * # Mermaid diagram definition
 * const diagramStr = `
 * ---
 * title: Portfolio Page
 * ---
 * %%{init: {'theme':'dark'}}%%
 * flowchart TD
 * `;
 */

/** */
const portfolioProjectConfig = Project.parse({
  title: "Portfolio Page",
  description,
  stack: new Map([["Frontend", ["React.js", "MobX.js", "Typescript", "Vite", "Bun"]]]),
  repo: "https://github.com/mrlucciola/portfolio-page.git",
  img: undefined,
  site: "https://portfolio.mrlucciola.com/",
  diagram: undefined,
} as z.input<typeof Project>);

export default portfolioProjectConfig;

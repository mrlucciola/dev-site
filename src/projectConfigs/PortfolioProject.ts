// interfaces
import { Project } from "../mobx/interfaces/project";

/** Markdown string */
const description = `
Display recent projects.
`;
/** Mermaid diagram definition */
// const diagramStr = ``;

export default new Project(
  "Portfolio Page", // title
  description, // description
  new Map([["Frontend", ["React.js", "MobX.js", "Typescript", "Vite", "Bun"]]]), // stack
  "https://github.com/mrlucciola/portfolio-page/", // repo
  undefined, // img
  "https://portfolio.mrlucciola.com/", // "https://portfolio-qa.mrlucciola.com/"
  undefined // diagramStr
);

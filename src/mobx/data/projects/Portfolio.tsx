// interfaces
import { Project } from "../../interfaces/project";

/** Markdown string */
const description = `
Display of recent projects.
`;
/** Mermaid diagram definition */
// const diagramStr = ``;

export default new Project(
  "Portfolio Page", // title
  description, // description
  new Map([
    ["Frontend", ["React.js", "MobX.js", "Typescript", "Vite", "Yarn PnP"]],
  ]), // stack
  "https://github.com/mrlucciola/portfolio-page/", // repo
  undefined, // img
  "https://mrlucciola.com/", // site
  undefined, // ref
  undefined // diagramStr
);

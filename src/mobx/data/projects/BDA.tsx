// interfaces
import { Project } from "../../interfaces/project";

/** Markdown string */
const description = `
`;
/** Mermaid diagram definition */
const diagramStr = `
---
title: BPM Detection Algorithm
---
%%{init: {'theme':'dark'}}%%
flowchart TD
`;

export default new Project(
  "BDA",
  description,
  new Map([
    ["frontend", ["JavaScript (ES6)", "Web Audio API", "React", "Redux"]],
  ]),
  "https://github.com/mrlucciola/bpm-detection-algorithm.git",
  "/images/bda-preview.png",
  "https://mrlucciola.github.io/bpm-detection-algorithm/",
  undefined,
  diagramStr
);

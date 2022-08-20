import { Project } from "../mobx/types";

export const projectsArr = [
  new Project(
    "PitchClean",
    `\
      Social media investment platform focused on renewables (mock backend)
    `,
    new Map([
      ["frontend", ["React.js", "D3.js", "Redux.js"]],
      ["backend", ["MongoDB", "Node.js", "Express.js"]],
    ]),
    "/images/envest-preview.png",
    "https://github.com/pitch-clean/client-ui"
    // envest.pro
  ),
  new Project(
    "Diffuse",
    `\
      Collaborative songwriting software.\
      Register, sign in, create and save projects to your profile.\
      Add others to contribute to your songs and track the history of the songs progression!\
    `,
    new Map([
      ["frontend", ["React.js", "D3.js", "Redux.js"]],
      ["backend", ["MongoDB", "Node.js", "Django", "Django Rest Framework"]],
    ]),
    "/images/diffuse-preview.png",
    "https://github.com/mrlucciola/diffuse.git"
    // https://diffuse.dev
  ),
  new Project(
    "BDA",
    `
      Detects BPM and displays track information from user-added songs using a simple peak-detection algorithm
    `,
    new Map([
      ["frontend", ["JavaScript (ES6)", "Web Audio API", "React", "Redux"]],
    ]),
    "/images/bda-preview.png",
    "https://github.com/mrlucciola/bpm-detection-algorithm.git",
    "https://mrlucciola.github.io/bpm-detection-algorithm/"
  ),
  new Project(
    "Cofi",
    `\
      A digital interface for synthesizing musical sequences in a step-wise manner.\
      Simply point and click on the note you want to activate, and the time at which to activate.\
    `,
    new Map([["frontend", ["React.js", "Web Audio API", "Redux.js"]]]),
    "/images/cofi-preview.png",
    "https://github.com/mrlucciola/cofi.git",
    "https://mrlucciola.github.io/cofi/"
  ),
];

// export const _projectsArr = [
//   {
//     title: "",
//     repoURL: "",
//     siteURL: "", // https://envest.pro/
//     description: `\
//       Social media investment platform focused on renewables (mock backend)
//     `,
//     stackObj: {
//       frontend: ["React.js", "D3.js", "Redux.js"],
//       backend: ["MongoDB", "Node.js", "Express.js"],
//     },
//     imgURL: require("/images/envest-preview.png"),
//   },
//   {
//     title: "Diffuse",
//     repoURL: "https://github.com/mrlucciola/diffuse.git",
//     siteURL: "", // https://diffuse.dev
//     description: `\
//       Collaborative songwriting software.\
//       Register, sign in, create and save projects to your profile.\
//       Add others to contribute to your songs and track the history of the songs progression!\
//     `,
//     stackObj: {
//       frontend: ["React.js", "D3.js", "Redux.js"],
//       backend: ["MongoDB", "Node.js", "Django", "Django Rest Framework"],
//     },
//     imgURL: require("/images/diffuse-preview.png"),
//   },
//   {
//     title: "BDA",
//     repoURL: "https://github.com/mrlucciola/bpm-detection-algorithm.git",
//     siteURL: "https://mrlucciola.github.io/bpm-detection-algorithm/",
//     description: `
//       Detects BPM and displays track information from user-added songs using a simple peak-detection algorithm
//     `,
//     stackObj: {
//       frontend: ["JavaScript (ES6)", "Web Audio API", "React", "Redux"],
//     },
//     imgURL: require("/images/bda-preview.png"),
//   },
//   {
//     title: "Cofi",
//     repoURL: "https://github.com/mrlucciola/cofi.git",
//     siteURL: "https://mrlucciola.github.io/cofi/",
//     description: `\
//       A digital interface for synthesizing musical sequences in a step-wise manner.\
//       Simply point and click on the note you want to activate, and the time at which to activate.\
//     `,
//     stackObj: {
//       frontend: ["React.js", "Web Audio API", "Redux.js"],
//     },
//     imgURL: require("/images/cofi-preview.png"),
//   },
// ];

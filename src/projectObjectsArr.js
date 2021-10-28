export const projectObjectsArr = [
  // {
  // title: "Custom Admin",
  // },
  // {
  //     title: "Tascal",
  //     repoURL: "https://github.com/mrlucciola/Tascal.git",
  //     siteURL: "https://tascal.dev",
  //     description: `\
  //         Project management, scheduling, productivity-tracking, and note taking app.
  //     `,
  //     stackObj: {
  //         frontend: ['React.js', 'Redux.js'],
  //         backend: ['MongoDB, Node.js, Django, Python'],
  //     },
  //     imgURL: "/assets/images/Tascal-preview.png",
  // },
  {
    title: "PitchClean (f.k.a. Envest)",
    repoURL: "https://github.com/pitch-clean/client-ui",
    siteURL: "https://envest.pro/",
    description: `\
      Social media investment platform focused on renewables (backend disabled, profiles disabled, project suspended)
    `,
    stackObj: {
      frontend: ["React.js", "D3.js", "Redux.js"],
      backend: ["MongoDB", "Node.js", "Express.js"],
    },
    imgURL: require("./images/envest-preview.png"),
  },
  {
    title: "Diffuse",
    repoURL: "https://github.com/mrlucciola/diffuse.git",
    siteURL: "https://diffuse.dev",
    description: `\
      Collaborative songwriting software.\
      Register, sign in, create and save projects to your profile.\
      Add others to contribute to your songs and track the history of the songs progression!\
    `,
    stackObj: {
      frontend: ["React.js", "D3.js", "Redux.js"],
      backend: ["MongoDB", "Node.js", "Django", "Django Rest Framework"],
    },
    imgURL: require("./images/diffuse-preview.png"),
  },
  {
    title: "BDA",
    repoURL: "https://github.com/mrlucciola/bpm-detection-algorithm.git",
    siteURL: "https://mrlucciola.github.io/bpm-detection-algorithm/",
    description: `
      Detects BPM and displays track information from user-added songs using a simple peak-detection algorithm
    `,
    stackObj: {
      frontend: ["JavaScript (ES6)", "Web Audio API", "React", "Redux"],
    },
    imgURL: require("./images/bda-preview.png"),
  },
  {
    title: "Cofi",
    repoURL: "https://github.com/mrlucciola/cofi.git",
    siteURL: "https://mrlucciola.github.io/cofi/",
    description: `\
      A digital interface for synthesizing musical sequences in a step-wise manner.\
      Simply point and click on the note you want to activate, and the time at which to activate.\
    `,
    stackObj: {
      frontend: ["React.js", "Web Audio API", "Redux.js"],
    },
    imgURL: require("./images/cofi-preview.png"),
  },
];

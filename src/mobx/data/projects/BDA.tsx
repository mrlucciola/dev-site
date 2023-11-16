// interfaces
import { Project } from "../../interfaces/project";

/** Markdown string */
const description = `
Beat Detection Algorithm is, as the name describes, a simple beat detection algorithm presented through a React frontend.
The app inputs audio files (mp3/mp4) sampled at 44.1kHz, performs analysis, and outputs a tempo measured in beats-per-minute (BPM).
Fast Fourier transforms are used to decompose the samples from time-domain into frequency-domain, allowing us to isolate the low frequencies.
Low frequencies are the typical range for the rhythmic components of a song, and we can (crudely) estimate the BPM for a given song by identifying the average time between peaks in the low end.

Once the low-frequency peaks are isolated from the audio file, the audio is transformed back into the time-domain - where we can measure the time between each peak and calculate a mean, leaving us with the BPM.

Songs are pulled from soundcloud, but due to CORS issues, you must disable CORS in your browser to use this app properly.
`;
/** Mermaid diagram definition */
// const diagramStr = `
// // ---
// // title: BPM Detection Algorithm
// // ---
// // %%{init: {'theme':'dark'}}%%
// // flowchart TD
// `;

export default new Project(
  "BDA", // title
  description, // description
  new Map([
    ["frontend", ["JavaScript (ES6)", "Web Audio API", "React", "Redux"]],
  ]), // stack
  "https://github.com/mrlucciola/bpm-detection-algorithm.git", // repo
  "/images/bda-preview.png", // img
  "https://mrlucciola.github.io/bpm-detection-algorithm/", // site
  undefined, // ref
  undefined // diagramStr
);

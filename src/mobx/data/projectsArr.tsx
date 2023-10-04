import { FaReact, FaEthereum, FaAnchor } from "react-icons/fa";
import {
  SiD3Dotjs,
  SiRedux,
  SiMongodb,
  SiNodedotjs,
  SiTypescript,
  SiMui,
  SiExpress,
  SiMozilla,
  SiDjango,
  SiJavascript,
  SiMobx,
  SiSolidity,
  SiPostgresql,
  SiRust,
} from "react-icons/si";
import Avatar from "@mui/material/Avatar";
import { Project } from "../interfaces/project";

export const toolsIconMap: { [key: string]: JSX.Element } = {
  "React.js": <FaReact />,
  "D3.js": <SiD3Dotjs />,
  "Redux.js": <SiRedux />,
  MongoDB: <SiMongodb />,
  "Node.js": <SiNodedotjs />,
  Typescript: <SiTypescript />,
  MaterialUI: <SiMui />,
  "Express.js": <SiExpress />,
  "Web Audio API": <SiMozilla />,
  Django: <SiDjango />,
  JavaScript: <SiJavascript />,
  MobX: <SiMobx />,
  "Ethers.js": <FaEthereum />,
  "Polygon SDK": (
    <Avatar
      alt="MATIC"
      src="https://cdn.iconscout.com/icon/free/png-128/polygon-token-4086725-3379855.png"
      // src="https://cdn.iconscout.com/icon/free/png-256/polygon-token-4086724-3379854.png"
      sx={{ width: 24, height: 24, margin: 0, padding: 0 }}
    />
  ),
  Solidity: <SiSolidity />,
  PostgreSQL: <SiPostgresql />,
  Solana: (
    <Avatar
      alt="SOL"
      src="https://static.coinpaprika.com/coin/sol-solana/logo.png" //?rev=10608559
      sx={{ ml: `-6px`, width: 24, height: 24, margin: 0, padding: 0 }}
    />
  ),
  Rust: <SiRust />,
  "Anchor.rs": <FaAnchor />,
};

export const projectsArr = [
  // new Project(
  //   "CDP with Yield-Farming Solana App",
  //   `Built and deployed a Solana-native collateralized-debt-position platform for yield-bearing assets on mainnet.
  //   Issuing debt (minting stablecoin) while earning yield (on 'yield farms', liquidity mining, etc)
  //   on what otherwise would-be idle assets - all while maintaining full self-custody of utilized assets.
  //   \n\nLead an Agile team of 10 developers, lead the design and technical implementation of the product
  //   line and was a major contributor on product decisions. Implemented Agile methodology and standards for collaborative
  //   development. Lead code reviews and managed external code audits.`,
  //   new Map([
  //     ["Blockchain", ["Solana", "Anchor.rs", "Rust"]],
  //     ["Backend", ["Typescript", "Node.js", "PostgreSQL", "Express.js"]],
  //     ["Frontend", ["Typescript", "React.js", "Redux.js"]],
  //   ]),
  //   "https://github.com/mrlucciola/cdp"
  // ),
  new Project(
    "Aave Liquidation Engine",
    `\
      Polygon smart contract and Node.js application which monitors and liquidates undercollateralized
      debt positions on Aave, a money-market DeFi platform on Polygon (and Ethereum).

      Since this is a competitive task, transaction submission limits and latency were the two main factors in successfully executing a liquidation.
      To avoid RCP-call limits and minimize mempool-transaction-forwarding latency, we deployed a managed Polygon node (Infura).
      We configured a managed Postgres instance to store account info for multithreaded, fault-tolerant and asynchronous data recall.
      This was necessary to maximize data recency.
    `,
    new Map([
      ["Blockchain", ["Polygon SDK", "Solidity", "Ethers.js"]],
      ["Backend", ["Node.js", "PostgreSQL", "Express.js"]],
    ]),
    "https://github.com/mrlucciola/aave-liquidation-engine"
  ),
  // new Project(
  //   "Portfolio Page",
  //   `\
  //     Rocco Lucciola's portfolio page
  //   `,
  //   new Map([["Frontend", ["React.js", "MobX", "Typescript"]]]),
  //   "https://github.com/mrlucciola/dev-site/",
  //   undefined,
  //   "https://mrlucciola.com/"
  // ),
  // new Project(
  //   "PitchClean",
  //   `\
  //     Social media investment platform focused on renewables (mock backend)
  //   `,
  //   new Map([
  //     ["Frontend", ["React.js", "D3.js", "Redux.js"]],
  //     ["Backend", ["MongoDB", "Node.js", "Express.js"]],
  //   ]),
  //   "https://github.com/pitch-clean/client-ui",
  //   "/images/envest-preview.png"
  //   // envest.pro
  // ),
  // new Project(
  //   "Diffuse",
  //   `\
  //     Collaborative songwriting software.\
  //     Register, sign in, create and save projects to your profile.\
  //     Add others to contribute to your songs and track the history of the songs progression!\
  //   `,
  //   new Map([
  //     ["Frontend", ["React.js", "D3.js", "Redux.js"]],
  //     ["Backend", ["MongoDB", "Node.js", "Django"]],
  //   ]),
  //   "https://github.com/mrlucciola/diffuse.git",
  //   "/images/diffuse-preview.png"
  //   // https://diffuse.dev
  // ),
  // new Project(
  //   "BDA",
  //   `
  //     Detects BPM and displays track information from user-added songs using a simple peak-detection algorithm
  //   `,
  //   new Map([
  //     ["Frontend", ["JavaScript", "Web Audio API", "React.js", "Redux.js"]],
  //   ]),
  //   "https://github.com/mrlucciola/bpm-detection-algorithm.git",
  //   "/images/bda-preview.png",
  //   "https://mrlucciola.github.io/bpm-detection-algorithm/"
  // ),
  // new Project(
  //   "Cofi",
  //   `\
  //     A digital interface for synthesizing musical sequences in a step-wise manner.\
  //     Simply point and click on the note you want to activate, and the time at which to activate.\
  //   `,
  //   new Map([["Frontend", ["React.js", "Web Audio API", "Redux.js"]]]),
  //   "https://github.com/mrlucciola/cofi.git",
  //   "/images/cofi-preview.png",
  //   "https://mrlucciola.github.io/cofi/"
  // ),
];

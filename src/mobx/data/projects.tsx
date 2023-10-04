import { Project } from "../interfaces/project";

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
      Polygon smart contract and Node.js application which monitored and liquidated undercollateralized
      debt positions on Aave, a money-market DeFi platform on Polygon (and Ethereum).

      This application 1) monitors account activity on Aave's smart contracts; 2) identifies unhealthy debt positions; and 3) liquidates positions using a dedicated smart contract.

      Since this is a competitive task, the main concerns were 1) frontrunning; 2) transaction submission latency; and 3) transaction submission limits.

      One form of frontrunning occurs in the mempool, where participants can observe pending transactions, copy the information and compete for priority by increasing the gas-price. We solved for this by building a gas-price calculation that increases gas price up to the point of unprofitability.
      A second form of frontrunning occurs when block producers are elected to submit a block - allowing them to copy transaction information, submit their own, and prioritize their own (or outright exclude competing transactions) for the same liquidation.  We could not reasonably mitigate this risk, as it required running our own validator with a large token stake.
      
      To avoid RPC rate-limits from the public RPCs, minimize latency and prevent mempool-frontrunning, we deployed a managed Polygon RPC node (Infura).
      Used a managed PostgreSQL instance to store account health information for fast lookups and analysis.
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

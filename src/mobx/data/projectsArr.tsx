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
];
